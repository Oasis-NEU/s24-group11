import React from 'react';
import axios from 'axios';

export default function Instructor() {
    const handleGeneratePairings = () => {
        //make a GET request to the API endpoint
        axios.get('/generatestudentpairings')
            .then(response => {
                console.log(response.data); // Log the response from the server
                // You can add further handling here if needed
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <div className="font-mono">
                <h1 className="text-lg">Fundies Partner Match Form</h1>
                <h2 className="text-lg">Instructor View</h2>
                <button onClick={handleGeneratePairings}>Generate Pairings</button>
            </div>
        </div>
    );
}