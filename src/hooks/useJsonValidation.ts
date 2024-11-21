import { useState, useEffect } from "react";

export const useJsonValidation = (json: string) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      JSON.parse(json);
      setIsValid(true);
      setError(null);
    } catch (err: any) {
      setIsValid(false);
      setError(err.message);
    }
  }, [json]);

  return { isValid, error };
};
