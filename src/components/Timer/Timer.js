import React, { useState, useEffect, UseRef } from 'react';
import '../../styles/timer.css';
function Timer({ timerDays, timerHours, timerSeconds, timerMinutes }) {
    return (
        <div className="timer-container">
            <div class="timer-text">Sale ends in:</div>
            <div class="dice">{timerDays}</div>
            <div class="split">:</div>
            <div class="dice">{timerHours}</div>
            <div class="split">:</div>
            <div class="dice">{timerMinutes}</div>
            <div class="split">:</div>
            <div class="dice">{timerSeconds}</div>
        </div>
    );
}

Timer.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};
export default Timer;
