import React, { useState } from "react";
import axios from 'axios';

export const Addwilder = () => {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [age, setAge] = useState("");

    const saveWilder = async () => {
        let identity = {
            identity: {
                name,
                firstName,
                age
            }
        }
        console.log(identity);

        const response = await axios.post('http://localhost:3200/api/wilders', {
            identity: {
                name,
                firstName,
                age
            }
        });
        console.log(response);
    }

    const addWild = async (e) => {
        console.log('Test');
        e.preventDefault();
        saveWilder();   
    }

    return (
        <form onSubmit={addWild}>
            <label htmlFor="name-input">Name :</label>
            <input id="name-input" type="text" placeholder="Type the name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="city-input">City :</label>
            <input id="city-input" type="text" placeholder="Type the city" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input id="city-input" type="text" placeholder="Type the city" value={age} onChange={(e) => setAge(e.target.value)} />
            <button>Add</button>
        </form>
    );
}