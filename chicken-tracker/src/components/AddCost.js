import React, { useState } from 'react';
import axios from 'axios';

function AddCost({ addCost }) {
  //create state
  const [description, setDescription] = useState('');
  const [date_acquired, setDate_acquired] = useState('');
  const [cost_amount, setCost_amount] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    
    const costData = {
      description,
      date_acquired,
      cost_amount,
    };

    try {
      const response = await axios.post('http://localhost:3001/cost', costData);
      const newCost = response.data; // Make sure the server returns the created cost.
      addCost(newCost);  // Use the addCost function passed from the parent.

      // Clear form fields after successful submission
      setDescription('');
      setDate_acquired('');
      setCost_amount('');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Date Acquired:
        <input
          type="date"
          value={date_acquired}
          onChange={(e) => setDate_acquired(e.target.value)}
        />
      </label>
      <label>
        Cost Amount: $
        <input
          type="number"
          value={cost_amount}
          onChange={(e) => setCost_amount(e.target.value)}
        />
      </label>
      <button class="submitBtn" type="submit">Add Cost</button>
    </form>
  );
}

export default AddCost;
