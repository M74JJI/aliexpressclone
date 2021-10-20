import React, { useState, useEffect, UseRef } from 'react';
import '../../styles/Countdown.css';
function Countdown({ timerDays, timerHours, timerSeconds, timerMinutes }) {
    return (
        <>
            <div className="clock">
                <section>
                    <p>{timerDays} :</p>
                    <small>Days</small>
                </section>
                <section>
                    <p>{timerHours} :</p>
                    <small>Hours</small>
                </section>
                <section>
                    <p>{timerMinutes} :</p>
                    <small>Minutes</small>
                </section>
                <section>
                    <p>{timerSeconds}</p>
                    <small>Seconds</small>
                </section>
            </div>
        </>
    );
}

Countdown.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};
export default Countdown;
