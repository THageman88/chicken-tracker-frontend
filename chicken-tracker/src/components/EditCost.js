import React, { useState, useEffect } from 'react';
import NavBar from "./Navbar";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditCost = () => {
  const { id } = useParams();
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cost/${id}`);
        setDescription(response.data.description);
        setDate(response.data.date_acquired);
        setCost(response.data.cost_amount);
      } catch(err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/cost/${id}`, {
        description: description,
        date_acquired: date,
        cost_amount: cost,
      });

      // Redirect to cost page
      window.location.href = '/cost';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
        <NavBar />
        <h1 className="text-white">Edit Cost</h1>
        <form onSubmit={submitForm}>
            <label>
                Description:
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label>
                Date Acquired:
                <input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <label>
                Cost Amount:
                <input
                    type='number'
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
            </label>
            <button className="submitBtn" type='submit'>Update Cost</button>
        </form>

    </div>
  );
};

export default EditCost;
