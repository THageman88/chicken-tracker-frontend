import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddCost from './AddCost';

function CostPage(){
    const [costs, setCosts] = useState([]);

    const addCost = (newCost) => {
        setCosts(oldCosts => [...oldCosts, newCost]);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/cost');
                setCosts(response.data);
            } catch(err) {
                console.error(err.message);
            }
        };

        fetchData();
    }, []);

    const deleteCost = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/cost/${id}`);
            setCosts(costs.filter((cost) => cost.expense_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <NavBar/>
            <div className="row">
                <div className="col-md-8">
                    <h1 class="text-white">Cost Page</h1>

                    {costs.map((cost) => (
                        <div key={cost.expense_id}>
                            <h2 className="text-warning">{cost.description}</h2>
                            <p className="text-white">Date Acquired: {cost.date_acquired}</p>
                            <p className="text-white"> Cost Amount: ${cost.cost_amount}</p>
                            <button onClick={() => deleteCost(cost.expense_id)}>Delete</button>
                            <button><Link to={`/editcost/${cost.expense_id}`}>Edit</Link></button>
                        </div>
                    ))}

                    <h2 className="text-white">Total Cost: ${(costs.reduce((total, cost) => total + Number(cost.cost_amount), 0)).toFixed(2)}</h2>
                </div>
                <div className="col-md-4">
                    <AddCost addCost={addCost} />
                </div>
            </div>
        </div>
    )
};

export default CostPage;
