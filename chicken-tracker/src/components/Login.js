import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import  {Link , Route , useNavigate  } from 'react-router-dom';

function LoginPage({ app }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      alert('User logged in successfully');
      navigate('/home');
    } catch (error) {
      alert(`Failed to log in. Error: ${error.message}`);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1 className="text-white">Login Page</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="submitBtn" type="submit">Login</button>
    </form>
    <div>
                <button className="backBtn" href="/"><Link className="backBtn" to="/">Back</Link></button>
            </div>
    </div>
  );
}

export default LoginPage;
