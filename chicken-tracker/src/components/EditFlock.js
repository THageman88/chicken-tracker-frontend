import React, { useState, useEffect } from 'react';
import NavBar from "./Navbar";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditFlock = () => {
  const { id } = useParams();
  const [chx_name, setChx_name] = useState('');
  const [hen_or_rooster, setHen_or_rooster] = useState(''); // initialize as empty string
  const [age, setAge] = useState('');
  const [date_acquired, setDate_acquired] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/flock/${id}`);
        setChx_name(response.data.chx_name);
        setHen_or_rooster(response.data.hen_or_rooster);
        setAge(response.data.age);
        setDate_acquired(response.data.date_acquired);
        setComments(response.data.comments);
      } catch(err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/flock/${id}`, {
        chx_name: chx_name,
        hen_or_rooster: hen_or_rooster,
        age: age,
        date_acquired: date_acquired,
        comments: comments,
      });

      // Redirect to flock page
      window.location.href = '/flock';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <NavBar />
      <h1 class="text-white">Edit Chicken</h1>
      <form onSubmit={submitForm}>
        <label>
          Chicken Name:
          <input
            type='text'
            style={{ color: '#FFFFFF' }}
            value={chx_name}
            onChange={(e) => setChx_name(e.target.value)}
          />
        </label>
        <label>
          Hen or Rooster:
          <select
            value={hen_or_rooster}
            onChange={(e) => setHen_or_rooster(e.target.value)}
            className="text-white"
          >
            <option value="">Please select</option>
            <option value="hen">Hen</option>
            <option value="rooster">Rooster</option>
          </select>
        </label>
        <label>
          Age:
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Date Acquired:
          <input
            type='date'
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
        <button className="submitBtn" type='submit'>Update Chicken</button>
      </form>
    </div>
  );
};

export default EditFlock;
