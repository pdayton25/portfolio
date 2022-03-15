import React, { useState } from "react";
import Button from "./Button";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <form>
            <input 
                className="form-field"
                type="text"
                value={name}   
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                className="form-field"
                type="text"
                value={email}   
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                className="form-field"
                type="text"
                value={message}   
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button 
                name= 'submit'
            />
        </form>
    )
};
export default Contact;