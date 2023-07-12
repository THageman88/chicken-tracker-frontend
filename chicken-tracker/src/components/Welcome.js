import React from "react" ;
import {Route , Link} from "react-router-dom";


function WelcomePage (){
    return(
        <div>
            <h1 className="text-white"> Welcome to Chicken Tracker!</h1>
            <div>
            <p className="text-white">Log in or Register to continue</p>
            </div>
            <div>
                <button className="submitBtn"><Link class="submitBtn" to="/login">Login</Link></button>
            </div>
            <div>
                <button className="submitBtn"><Link class="submitBtn"to="/register">Register</Link></button>
            </div>
        </div>
    )
}

export default WelcomePage;