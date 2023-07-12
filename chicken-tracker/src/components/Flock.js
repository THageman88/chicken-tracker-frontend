import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { Link } from 'react-router-dom';
import axios from "axios";
import AddChicken from './AddChicken';

function FlockPage() {
  const [flock, setFlock] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/flock');
        setFlock(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  const addChicken = (chicken) => {
    setFlock([...flock, chicken]);
  };

  const updateChicken = (updatedChicken, index) => {
    const newFlock = [...flock];
    newFlock[index] = updatedChicken;
    setFlock(newFlock);
  };

  const deleteFlock = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/flock/${id}`);
      setFlock(flock.filter((flock) => flock.flock_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    
    <div>
      <NavBar/>
      <h1 className="text-white">Flock Page</h1>
      {flock.map((chicken, index) => (
        <div key={chicken.flock_id}>
          <h2 className="text-warning">{chicken.chx_name}</h2>
          <p className="text-white">Age: {chicken.age}</p>
          <p className="text-white">Date Acquired: {new Date(chicken.date_acquired).toLocaleDateString('en-GB')}
</p>
          <p className="text-white">Comments: {chicken.comments}</p>
          <button onClick={() => deleteFlock(chicken.flock_id)}>Delete</button>
          <button>
          <Link 
  to={{
    pathname: `/editflock/${chicken.flock_id}`,
    state: { chicken: chicken, chickenIndex: index }
  }}
>
  Edit
</Link>
          </button>
        </div>
      ))}
      <AddChicken addChicken={addChicken} />
    </div>
    
  )
};

export default FlockPage;
