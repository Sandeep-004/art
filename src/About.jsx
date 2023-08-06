import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutImg from './Images/AboutImg.png';
import Social from './Social';

const About = () => {
    return (
        <>
            <div className="row aboutRow">
                <div className="col-6 aboutCol">
                    <img src={AboutImg} alt="aboutImg" />
                </div>
                
                <div className="col-6 aboutCol2"> 
                <div className="aboutH2"><h2>ABOUT ME</h2></div>      
                    <div className="aboutMe">
                        <h4>Hi I am Sandeep Sharma, a passionate Sketch Artist.
                        I discovered my passion for Sketching when I was in my School
                        and since then I've been learning, working and improving my skills.
                        The reason I love this so much, is may be because of the feeling it gives me,
                        when I see my "Art" adding smile on someone's face and that is what gives
                        me more power to work and keeps me motivated.</h4>
                </div>
                    <div className="head_email"><h5>My Email : <span style={{fontWeight: '600', color: '#6C63FF'}}>sharmas175@gmail.com</span> </h5></div>
                <Social />
                </div>
                
            </div>               
        </>
    )
}

export default About;
