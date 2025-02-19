import { useEffect, useState } from 'react';

function Backend() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Backend Response:</h1>
      <p>{message}</p>
    </div>
  );
}

export default Backend;
