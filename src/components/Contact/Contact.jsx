import React from 'react';
// import { Link } from 'react-router';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <p className="p_contact">Contact K. C.!</p>
                <ul>
                <li><a className="a_contact" target="_blank" href="https://www.linkedin.com/in/katharine-chandler/">Linked In</a></li>
            <br /> <br />
                </ul>
            </div>
        );
    }
}

export default Contact;