import React, { useState } from 'react';
import Card from './shared/Card';

function FeedbackForm() {
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }
    return (
        <Card>
            <form>
            <h2>
            How would you rate your service with us ?
            <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}></input>
            <button type='submit'>Send</button>
            </div>
            </h2>
            </form>
        </Card>
    )
} 

export default FeedbackForm
