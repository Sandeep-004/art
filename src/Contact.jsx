import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactImg from './Images/contactt.png';
import Social from "./Social";


const Contact = () => {

  const [FormData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    fetch('/', {
      method: 'POST',
      body: new FormData(form),
    });
  };

    return (
        <>
          <div className="row contactRow">
              <div className="col-6 contact">
                <img 
                className="contactImg" src={ContactImg} alt="contact" />
              </div>
              <div className="col-6 formDetails">
              <form className="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"> 
                <div className="contactH2"><h2>Get in touch</h2>
                <small className="form-text text-muted smallHead">Want to get in touch?
              We'd would love to hear from you. Here's how you can reach us...</small><br />
              </div><br />
              <div class="form-group mainFormDiv">
                  <label for="exampleInputFName" className="labelForm">First Name:</label>
                      <input type="text" className="form-control" id="exampleInputFName"  placeholder="Enter First Name" />
              </div>
              <div className="form-group">
                  <label for="exampleInputLName" className="labelForm">Last Name:</label>
                      <input type="text" className="form-control" id="exampleInputLName"  placeholder="Enter Last Name" />
              </div>
              <div className="form-group">
                  <label for="exampleInputEmail1" className="labelForm">Email:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                  <label for="exampleInputMobile" className="labelForm">Mobile:</label>
                      <input type="tel" className="form-control" id="exampleInputMobile"   placeholder="012-34-56789" pattern="[0-9]{3}-[0-9]{2}-[0-9]{5}" required />
              </div>
              <div className="form-group">
                <label for="exampleFormControlFile1" className="labelForm">Select a photo</label>
                  <input type="file" className="form-control-file" id="exampleFormControlFile1" />
              </div>
                <button style={{backgroundColor:'#224B0C'}} type="submit" className="btn btn-success submit" onClick={handleSubmit}>Submit</button>
            </form>
            <div className="contactSocial">
              <Social style={{color: '#224B0C'}} />
            </div> 
              </div>           
          </div>  
        </>
    )
}

export default Contact;
