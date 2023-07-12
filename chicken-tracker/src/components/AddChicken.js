import React, { useState } from 'react';
import axios from 'axios';

function AddChicken({ addChicken }) {
  // creates state for AddChicken
  const [chx_name, setChx_name] = useState('');
  const [hen_or_rooster, setHen_or_rooster] = useState(false);
  const [age, setAge] = useState('');
  const [date_acquired, setDate_acquired] = useState('');
  const [comments, setComments] = useState('');
//handles the commit
  const submitForm = async (e) => {
    e.preventDefault();

    const chickenData = {
      chx_name,
      hen_or_rooster,
      age,
      date_acquired,
      comments,
    };
// try to push chicken data to the flock table
    try {
      const response = await axios.post('http://localhost:3001/flock', chickenData);

      // Clear form fields after successful submission
      setChx_name('');
      setHen_or_rooster(false);
      setAge('');
      setDate_acquired('');
      setComments('');

      // Add the new chicken to the flock in the parent component
      addChicken(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };
//This renders the add chicken form
  return (
    <form onSubmit={submitForm}>
      <label >
        Name:
        <input
          type="text"
          value={chx_name}
          onChange={(e) => setChx_name(e.target.value)}
          
        />
      </label>
      <label>
      Hen or Rooster:
      <select
        value={hen_or_rooster}
        onChange={(e) => setHen_or_rooster(e.target.value)}
      >
        <option value="">Please select</option>
        <option value="hen">Hen</option>
        <option value="rooster">Rooster</option>
      </select>
    </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
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
        Comments:
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </label>
      <button class="submitBtn" type="submit">Add Chicken</button>
    </form>
  );
}

export default AddChicken;
