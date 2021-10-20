import React, { useEffect, useState } from 'react';
import AdCard from './AdCard';
import AdCard2 from './AdCard2';
import { Link } from 'react-router-dom';
import Timer from '../Timer/Timer';
import './main.css';
let interval;
function DealsAd() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    const startTimer = () => {
        const countDownDate = new Date('December 30,2021 ').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <div className="DealsAd">
            <span>Up to 60%</span>
            <img
                src="//ae01.alicdn.com/kf/Hbb34eea34e38448c8803197c93cdc34ak/1200x290.gif"
                alt=""
            />
            <AdCard img="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1631747791/xji7n6hl8ey6vg3v41e4.jpg" />
            <AdCard2 img="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1631746771/zxtihjcih8rzjk4o8zra.jpg" />
            <Timer
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
            />
            <div className="DealsAd-Banner">
                <Link to="/product/2021-new-arrivel-long-coat-designs-chinese-red-men-suit-gentle-mens-tuxedo-prom-blazer-custom-3-pieces-(jacket+vest+pants)">
                    <div className="DealsAd-Card">
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633719378/zywae9ycubrgwd8wvecf.jpg"
                            alt=""
                        />
                    </div>
                </Link>
                <Link to="/product/new-fashion-small-square-vintage-cycling-sunglasses-women-2021-cycling-equipment-polarized-sun-glasses-rectangle-eyewear-uv400">
                    <div className="DealsAd-Card">
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633776010/qbw1h0our9rls9hy53zh.jpg"
                            alt=""
                        />
                    </div>
                </Link>
                <Link to="/product/men-witcher-cosplay-costume-adult-superhero-wizard-armour-outfit-black-leather-sorcerer-hunter-suit-halloween-carnival-costumes">
                    <div className="DealsAd-Card">
                        <img
                            src="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633721005/m5dg21igbf1jqlx1hshl.jpg"
                            alt=""
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default DealsAd;
