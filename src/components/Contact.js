import React, { useState } from "react";
import Button from "./Button";
import "./Contact.css";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitEmail = (e) => {
        e.preventDefault()
        console.log("email submitted")
    }

    return (
        <section className="contact-container" id="contact">
            <div className="contact">
                <div className="project-header">
                    <p className="proj-sec-header white">reach out here</p>
                    <p className="proj-header white">MESSAGE</p>
                </div>
                <form className="form">
                    <input 
                        className="form-field"
                        type="text"
                        value={name}  
                        placeholder="Name" 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        className="form-field"
                        type="text"
                        value={email}   
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea 
                        rows="8"
                        className="message"
                        type="text"
                        value={message}   
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="send-btn" onClick={submitEmail}>
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
};
export default Contact;