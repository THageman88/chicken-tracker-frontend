import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function NavBar() {

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth).then(() => {
      // Sign-out successful.
     alert('Signed out');
      window.location.href = '/';
    }).catch((error) => {
      // An error happened.
      console.log('Error signing out: ', error);
    });
  };

  return (
    <nav>
<ul className="nav nav-tabs">
          <li className="nav-item active "><Link className="flex-sm-fill text-sm-center text-white nav-link" to="/home">Home</Link></li>
        <li className="nav-item active "><Link className="flex-sm-fill text-sm-center text-white nav-link" to="/cost">Expense-Tracker</Link></li>
          <li className="nav-item active "><Link className="flex-sm-fill text-sm-center text-white nav-link" to="/flock">My-Flock</Link></li>
          <li className="nav-item active "><button className="btn btn-outline-primary text-warning" onClick={handleSignOut}>Sign Out</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;
