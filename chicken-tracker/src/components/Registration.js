import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate , Link} from "react-router-dom";

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User registered successfully');
      setEmail('');
      setPassword('');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      alert(`Failed to register. Error: ${error.message}`);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1 className="text-white">Registration Page</h1>
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
      <button  className="submitBtn" type='submit'>Register</button>
      <div>
      <button className="backBtn"><Link className="backBtn" to="/">Back</Link></button>
            </div>
    </form>
    
    </div>
  );
}

export default RegistrationPage;
