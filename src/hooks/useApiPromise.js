import React, { useEffect, useState } from 'react';

export const useApiPromise = async (apiPromise) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      async function fetchData() {
        const response = await apiPromise();
        setResponse(response);
      }
      fetchData();
    } catch (error) {
      setError(error);
    }
  }, []);

  return [loading, response, error];
};
