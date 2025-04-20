import React, { useState } from 'react';

const PredictForm = () => {
  const [features, setFeatures] = useState(['', '', '']); // adjust number of inputs here
  const [prediction, setPrediction] = useState(null);

  const handleChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const numericFeatures = features.map(f => parseFloat(f)); // convert strings to numbers

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features: numericFeatures }),
      });

      const data = await response.json();
      setPrediction(data.prediction[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Stock Prediction</h2>
      <form onSubmit={handleSubmit}>
        {features.map((val, index) => (
          <input
            key={index}
            type="number"
            value={val}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Feature ${index + 1}`}
            style={{ display: 'block', margin: '10px 0' }}
          />
        ))}
        <button type="submit">Predict</button>
      </form>
      {prediction !== null && (
        <h3>Prediction: {prediction}</h3>
      )}
    </div>
  );
};

export default PredictForm;
