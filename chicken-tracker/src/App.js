import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './components/Welcome';
import RegistrationPage from './components/Registration';
import LoginPage from './components/Login';
import HomePage from './components/Home';
import CostPage from './components/Cost';
import FlockPage from './components/Flock'
import AddCost from './components/AddCost'
import AddChicken from './components/AddChicken';
import EditCost from './components/EditCost';
import EditFlock from './components/EditFlock';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cost" element={<CostPage />} />
        <Route path="/addcost" element={<AddCost />} /> 
        <Route path="/editcost/:id" element={<EditCost />} />
        <Route path="/flock" element={<FlockPage />} />
        <Route path="/addchicken" element={<AddChicken />} />
        <Route path="/editflock/:id" element={<EditFlock />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
