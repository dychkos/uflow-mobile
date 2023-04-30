import { useState } from 'react';

export const useValidation = (rules, fields) => {
  const [errors, setErrors] = useState({});

  const clearError = (errorField) => {
    setErrors((state) => ({ ...state, [errorField]: null }));
  };

  const validate = () => {
    const newErrors = {};

    for (const { key, rule, msg } in rules) {
      if (!rule(fields[key])) {
        newErrors[key] = msg;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    clearError,

    validate
  };
};
