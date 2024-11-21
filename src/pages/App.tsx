import React, { useState } from "react";
import JsonEditor from "../components/JsonEditor";
import FormGenerator from "../components/FormGenerator";
import "../index.css";

const App: React.FC = () => {
  const [schema, setSchema] = useState<any>(null)

  const handleJsonChange = (json: string) => {
    try {
      setSchema(JSON.parse(json))
    } catch {
      setSchema(null)
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Dynamic Form Generator</h1>
      </header>
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2">
        <JsonEditor onChange={handleJsonChange} />
        <div className="border-l">
          <FormGenerator schema={schema} />
        </div>
      </main>
    </div>
  )
}

export default App