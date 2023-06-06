import React, { useEffect, useState } from 'react';

export default function Quote() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const settings = {
        headers: { 'X-Api-Key': 'Pjjwz++sTlzbIC4Q0aDB4A==A8R1Hz7xIzxRbWnv' },
        contentType: 'application/json',
        method: 'GET',
      };
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', settings);
        const responsJson = await response.json();
        setData(`"${responsJson[0].quote}"~ ${responsJson[0].author}`);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      fetchData();
    };
  }, []);

  if (loading === true) return <div>Loading...</div>;
  if (hasError === true) return <div>Error try again</div>;

  return (
    <div>
      {' '}
      { data }
      {' '}
    </div>
  );
}
