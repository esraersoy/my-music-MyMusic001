import { useState } from "react";
import { useHistory } from "react-router";
import * as React from 'react';
import Cookies from 'js-cookie';
import { User } from './models/'
import { DataStore } from 'aws-amplify';

const Register = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setEmailAddress(emailAddress.trim());
            // Check the user table if the user exists.
            const tbuser = (await DataStore.query(User)).filter(c => c.emailaddress === emailAddress);
            console.log("tbuser:" + tbuser);
            // If the user does not exist, create an entry in the user table.
            if (tbuser == "") {
                DataStore.save(
                    new User({
                        emailaddress: emailAddress
                    })
                );
                console.log("Email address saved successfully!");
            }
            Cookies.set('emailaddress', emailAddress);
            history.push('/Settings');

        } catch (error) {
            console.log("Error saving email address", error);
            setErrorMessage("Error saving email address. Error: " + error.message)
        }
    }

    return (
        <div className="customform">
            <h2>Let's register!</h2>
            <div>{errorMessage && <p className="error">{errorMessage}</p>}</div>
            <form onSubmit={handleSubmit}>
                <label>E-mail Address:</label>
                <input type="email"
                    required
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;