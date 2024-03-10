'use client'
import { useState } from 'react';

export default function MatchingFormPage() {
    const [mondayStartTime, setMondayStartTime] = useState('');
    const [mondayEndTime, setMondayEndTime] = useState('');
    const [tuesdayStartTime, setTuesdayStartTime] = useState('');
    const [tuesdayEndTime, setTuesdayEndTime] = useState('');
    const [wednesdayStartTime, setWednesdayStartTime] = useState('');
    const [wednesdayEndTime, setWednesdayEndTime] = useState('');
    const [thursdayStartTime, setThursdayStartTime] = useState('');
    const [thursdayEndTime, setThursdayEndTime] = useState('');
    const [fridayStartTime, setFridayStartTime] = useState('');
    const [fridayEndTime, setFridayEndTime] = useState('');
    const [saturdayStartTime, setSaturdayStartTime] = useState('');
    const [saturdayEndTime, setSaturdayEndTime] = useState('');
    const [sundayStartTime, setSundayStartTime] = useState('');
    const [sundayEndTime, setSundayEndTime] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (mondayStartTime >= mondayEndTime) {
            setError('Monday start time must come before Monday end time');
        } else if (tuesdayStartTime >= tuesdayEndTime) {
            setError('Tuesday start time must come before Tuesday end time');
        } else if (wednesdayStartTime >= wednesdayEndTime) {
            setError('Wednesday start time must come before Wednesday end time');
        } else if (thursdayStartTime >= thursdayEndTime) {
            setError('Thursday start time must come before Thursday end time');
        } else if (fridayStartTime >= fridayEndTime) {
            setError('Friday start time must come before Friday end time');
        } else if (saturdayStartTime >= saturdayEndTime) {
            setError('Saturday start time must come before Saturday end time');
        } else if (sundayStartTime >= sundayEndTime) {
            setError('Sunday start time must come before Sunday end time');
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
            <div>
                <label htmlFor="tuesday-start">Tuesday Start</label>
                <input 
                    type="time" 
                    id="tuesday-start" 
                    value={tuesdayStartTime}
                    onChange={(e) => setTuesdayStartTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="tuesday-end">Tuesday End</label>
                <input 
                    type="time" 
                    id="tuesday-end" 
                    value={tuesdayEndTime}
                    onChange={(e) => setTuesdayEndTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="wednesday-start">Wednesday Start</label>
                <input 
                    type="time" 
                    id="wednesday-start" 
                    value={wednesdayStartTime}
                    onChange={(e) => setWednesdayStartTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="wednesday-end">Wednesday End</label>
                <input 
                    type="time" 
                    id="wednesday-end" 
                    value={wednesdayEndTime}
                    onChange={(e) => setWednesdayEndTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="thursday-start">Thursday Start</label>
                <input 
                    type="time" 
                    id="thursday-start" 
                    value={thursdayStartTime}
                    onChange={(e) => setThursdayStartTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="thursday-end">Thursday End</label>
                <input 
                    type="time" 
                    id="thursday-end" 
                    value={thursdayEndTime}
                    onChange={(e) => setThursdayEndTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="friday-start">Friday Start</label>
                <input 
                    type="time" 
                    id="friday-start" 
                    value={fridayStartTime}
                    onChange={(e) => setFridayStartTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="friday-end">Friday End</label>
                <input 
                    type="time" 
                    id="friday-end" 
                    value={fridayEndTime}
                    onChange={(e) => setFridayEndTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="saturday-start">Saturday Start</label>
                <input 
                    type="time" 
                    id="saturday-start" 
                    value={saturdayStartTime}
                    onChange={(e) => setSaturdayStartTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="saturday-end">Saturday End</label>
                <input 
                    type="time" 
                    id="saturday-end" 
                    value={saturdayEndTime}
                    onChange={(e) => setSaturdayEndTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="sunday-start">Sunday Start</label>
                <input 
                    type="time" 
                    id="sunday-start" 
                    value={sundayStartTime}
                    onChange={(e) => setSundayStartTime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="sunday-end">Sunday End</label>
                <input 
                    type="time" 
                    id="sunday-end" 
                    value={sundayEndTime}
                    onChange={(e) => setSundayEndTime(e.target.value)}
                    required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    )
}