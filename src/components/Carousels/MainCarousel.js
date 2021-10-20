import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);
function MainCarousel() {
    return (
        <AutoplaySlider
            animation="cubeAnimation"
            bullets={false}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
        >
            <div>
                <img
                    src="https://cdn.shopify.com/s/files/1/0404/1101/files/MH40w_PDP_header_V10_1600x.jpg?v=1599836618"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://cdn.shopify.com/s/files/1/0404/1101/files/Leica_2021_HP_desktop_V04_1600x.jpg?v=1629312082"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://cdn.shopify.com/s/files/1/0404/1101/files/MW08_Sport_Green_HP_desktop_V02_1600x.jpg?v=1627134971"
                    alt=""
                />
            </div>
        </AutoplaySlider>
    );
}

export default MainCarousel;
