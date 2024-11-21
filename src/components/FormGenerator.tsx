import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormSchema } from "../../types/schema";
import { useEffect } from "react";
import { useState } from "react";


interface FormGeneratorProps {
  schema: FormSchema | null;
  onSubmit: (data: Record<string, any>) => void;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [formData, setFormData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    if (schema) {
      reset();  // Reset form fields when the schema changes
    }
  }, [schema, reset]);

  if (!schema) {
    return <p className="text-gray-500">Please enter a valid schema.</p>;
  }

  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };
   // Function to download form data as JSON
   const downloadJson = () => {
    if (!formData) {
      alert("No form data available to download!");
      return;
    }

    const blob = new Blob([JSON.stringify(formData, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "form-data.json";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 border rounded-md shadow-sm">
    {/* Title */}
    <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
      {schema.formTitle}
    </h2>
    
    {/* Description */}
    <p className="mb-4 text-gray-600 dark:text-gray-400">
      {schema.formDescription}
    </p>

    {/* Form */}
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema.fields.map((field: any) => (
        <div key={field.id} className="flex flex-col">
          {/* Label */}
          <label
            htmlFor={field.id}
            className="font-medium text-black dark:text-white"
          >
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {/* Input Fields */}
          {field.type === "text" || field.type === "email" ? (
            <input
              id={field.id}
              {...register(field.id, {
                required: field.required,
                pattern: field.validation?.pattern
                  ? {
                      value: new RegExp(field.validation.pattern),
                      message: field.validation.message,
                    }
                  : undefined,
              })}
              placeholder={field.placeholder}
              type={field.type}
              className="border rounded p-2 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
            />
          ) : field.type === "select" ? (
            <select
              id={field.id}
              {...register(field.id, { required: field.required })}
              className="border rounded p-2 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
            >
              {field.options?.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.id}
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="border rounded p-2 h-24 text-black dark:text-white bg-gray-100 dark:bg-gray-700"
            />
          ) : null}

          {/* Validation Error Message */}
          {errors[field.id] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.id]?.message || "This field is required"}
            </p>
          )}
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>

    {/* Download Button for Form Data */}
    {formData && (
      <button
        onClick={downloadJson}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Download Form Data
      </button>
    )}
  </div>
);
};

export default FormGenerator;