import React, { useState, useEffect } from "react";
import JsonEditor from "../components/JsonEditor";
import FormGenerator from "../components/FormGenerator";
import "../index.css";

const App: React.FC = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // State for storing the schema
  const [schema, setSchema] = useState<any>(null);
  const [formData, setFormData] = useState<Record<string, any> | null>(null);

  // Toggle dark mode when the state changes
  useEffect(() => {
    // Toggle the 'dark' class on the body element
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle JSON input and update the schema
  const handleJsonChange = (json: string) => {
    try {
      setSchema(JSON.parse(json));
    } catch {
      setSchema(null); // If invalid JSON is entered, set schema to null
    }
  };
   // Copy JSON to clipboard
   const copyJsonToClipboard = () => {
    if (schema) {
      navigator.clipboard.writeText(JSON.stringify(schema, null, 2))
        .then(() => {
          alert("Form JSON copied to clipboard!");
        })
        .catch(() => {
          alert("Failed to copy JSON.");
        });
    } else {
      alert("No JSON to copy!");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold text-white">Dynamic Form Generator</h1>
        <button
           onClick={() => setDarkMode((prevMode) => !prevMode)}
           className="p-2 bg-gray-800 text-white rounded hover:bg-gray-600 transition-colors"
          >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="border p-4 rounded bg-white dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Enter JSON Schema</h2>
          <JsonEditor onChange={handleJsonChange} />
          <button
            onClick={copyJsonToClipboard}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Copy Form JSON
          </button>
        </div>
        <div className="border p-4 rounded bg-white dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Generated Form</h2>
          <FormGenerator schema={schema} />
        </div>
      </main>
    </div>
  );
};

export default App;
