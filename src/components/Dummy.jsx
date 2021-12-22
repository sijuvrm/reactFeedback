import React, { useState, useEffect } from 'react';

function Dummy({input}) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(()=>setTime(new Date()), 1000 )
        return () => {
            clearInterval(timer)
        }
    }, [])
    console.log(time);
    if (!input) return <div>{`Todays's Date is ${time.toLocaleDateString()} and Time is ${time.toLocaleTimeString()}`}</div>;
    if (input && input.legth) {
        return input.map((item) => <div><li>{item}</li></div>);
    } else {
        return <div>{input}</div>;
    }
}

export default Dummy
