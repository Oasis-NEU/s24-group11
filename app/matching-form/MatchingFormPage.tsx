'use client'
import { useState } from 'react';

export default function MatchingFormPage() {
    const [name, setName] = useState('');
    const [mondayStartTime, setMondayStartTime] = useState('');
    const [mondayEndTime, setMondayEndTime] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (mondayStartTime >= mondayEndTime) {
            setError('Monday start time must come before Monday end time');
        } else {
            // Reset error state
            setError('');
            // Perform further actions, such as submitting the form data
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Select your availability on the following days</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="monday-start">Monday Start</label>
                <input 
                    type="time" 
                    id="monday-start" 
                    value={mondayStartTime}
                    onChange={(e) => setMondayStartTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="monday-end">Monday End</label>
                <input 
                    type="time" 
                    id="monday-end" 
                    value={mondayEndTime}
                    onChange={(e) => setMondayEndTime(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    )
}