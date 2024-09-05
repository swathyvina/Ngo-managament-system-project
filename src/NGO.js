// src/NGO.js
import React, { useState, useEffect } from 'react';

const NGO = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/ngos.json')
      .then((response) => response.json())
      .then((data) => setNgos(data))
      .catch((error) => console.error('Error loading NGO data:', error));
  }, []);

  return (
    <div>
      <h2>NGOs</h2>
      <ul>
        {ngos.map((ngo) => (
          <li key={ngo.id}>
            <h3>{ngo.name}</h3>
            <p>{ngo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NGO;
