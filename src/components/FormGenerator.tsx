import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormSchema } from "../../types/schema";


interface FormGeneratorProps {
  schema: FormSchema | null;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (!schema) {
    return <p className="text-gray-500">Please enter a valid schema.</p>;
  }

  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="p-4 bg-white border rounded-md shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{schema.formTitle}</h2>
      <p className="mb-4 text-gray-600">{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {schema.fields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label htmlFor={field.id} className="font-medium">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
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
                className="border rounded p-2"
              />
            ) : field.type === "select" ? (
              <select
                id={field.id}
                {...register(field.id, { required: field.required })}
                className="border rounded p-2"
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : null}
            {errors[field.id] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.id]?.message || "This field is required"}
              </p>
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormGenerator;