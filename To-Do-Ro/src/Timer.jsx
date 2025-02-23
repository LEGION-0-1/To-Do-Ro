import React, { useState, useEffect } from 'react';
import Button from './button.jsx';

function Timer() {
    const [workMinutes, setWorkMinutes] = useState(25);
    const [restMinutes, setRestMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isWorkMode, setIsWorkMode] = useState(true);

    function handleClick(work, rest) {
        setWorkMinutes(work);
        setRestMinutes(rest);
        setSeconds(0);
        setIsWorkMode(true);
        console.log("Work minutes:", work);
        console.log("Rest minutes:", rest);
    }

    useEffect(() => {
        if (!isActive) return;

        const timer = setInterval(() => {
            if (seconds === 0) {
                if (isWorkMode) {
                    if (workMinutes > 0) {
                        setWorkMinutes(workMinutes - 1);
                        setSeconds(59);
                    } else {
                        setIsWorkMode(false);
                        setSeconds(restMinutes * 60);
                    }
                } else {
                    if (restMinutes > 0) {
                        setRestMinutes(restMinutes - 1);
                        setSeconds(59);
                    } else {
                        setIsActive(false);
                        console.log("Cycle complete!");
                    }
                }
            } else if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [isActive, seconds, workMinutes, restMinutes, isWorkMode]);

    function startTimer() {
        setIsActive(true);
    }

    function stopTimer() {
        setIsActive(false);
    }

    return (
        <div id="timer">
            <h2>Pomodoro Timer</h2>
            <h3>{isWorkMode ? "Work Mode" : "Rest Mode"}</h3>
            <div id="clock">
                <h1>{isWorkMode ? workMinutes : restMinutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            </div>
            <Button onClick={handleClick} workMinutes={25} restMinutes={5} />
            <Button onClick={handleClick} workMinutes={50} restMinutes={10} />
            <Button onClick={handleClick} workMinutes={75} restMinutes={15} />
            <br />
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}

export default Timer;