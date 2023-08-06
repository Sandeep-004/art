import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Art = () => {
    return (
        <div className="row gallaryRow">
            <div className="col-12 gallaryCol">
                <img src="https://i.pinimg.com/474x/57/ea/1a/57ea1ab92056191f2ff88c52a1a6c5e8.jpg" alt="img1" />
                <img src="https://i.pinimg.com/474x/57/ea/1a/57ea1ab92056191f2ff88c52a1a6c5e8.jpg" alt="img1" />
                <img src="https://i.pinimg.com/474x/57/ea/1a/57ea1ab92056191f2ff88c52a1a6c5e8.jpg" alt="img1" />
                <img src="https://i.pinimg.com/474x/57/ea/1a/57ea1ab92056191f2ff88c52a1a6c5e8.jpg" alt="img1" />
            </div>          

            <div className="row">
            <div className="col-12 galColbtn">
            <NavLink to="/contact" className="link">
                <button className="btn btn-outline-success"> Order Your Sketch </button>
            </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Art;
