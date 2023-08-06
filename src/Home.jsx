import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sketch from './Images/Sketchbysandeep.jpg';

const Home = () => {
    return (
        <>
            <div className="row content">
                <div className="col-8 headlineCol">
                    <div className="headline">
                        <h1 style={{marginLeft: '5rem'}}>Every Artist Was First An <span style={{color: '#54BAB9'}}>Amature</span>.</h1>
                    </div>
                    <div className="tagLine">
                        <h2>Give someone special a handmade portrait of them and make their day memorable.</h2> 
                    </div>
                    <div className="buttonConnect">
                        <NavLink to="/contact" className="link"><button className="btn btn-outline-primary Letsconnect">Let's Connect</button></NavLink>
                    </div>
                </div>
                <div className="col-4 myWork">
                    <img src={Sketch} alt="mysketchwork" />
                </div>
                </div>
        </>
    )
}

export default Home;
