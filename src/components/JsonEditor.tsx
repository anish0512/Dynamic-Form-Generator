import React, { useState } from "react";
import { useJsonValidation } from "../hooks/useJsonValidation";

interface JsonEditorProps {
  onChange: (json: string) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange }) => {
  const [jsonInput, setJsonInput] = useState<string>("");
  const { isValid, error } = useJsonValidation(jsonInput);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
    <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">JSON Editor</h2>
    <textarea
      className={`w-full h-80 border p-2 rounded 
        ${isValid ? "border-gray-300 dark:border-gray-700" : "border-red-500"}
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
      `}
      value={jsonInput}
      onChange={handleInputChange}
      placeholder="Paste your JSON schema here..."
    />
    {error && <p className="text-red-500 mt-2 dark:text-red-400">{error}</p>}
  </div>
);
};

export default JsonEditor;