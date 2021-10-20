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
                    src="https://ae01.alicdn.com/kf/Hc80156291ad54ef9ae1b26d8de5d41015.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://ae01.alicdn.com/kf/H47507f9909e64fb886fd36d4c3104f95d.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://ae01.alicdn.com/kf/Hbb0e8e611f22441a9799befa2b406522I.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://ae01.alicdn.com/kf/Hc29ad43a140b4c08be2d0a2755ee5cdbG.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://ae01.alicdn.com/kf/H81668867f27c44fba84bb358de3f1acdh.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://ae01.alicdn.com/kf/Hcf72abb88b014af68f2f3e401443c6535.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://ae01.alicdn.com/kf/Hf48ae959e68b4083952437da1eb0953dO.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://ae01.alicdn.com/kf/Hd7bc8f5264614acab0a4fd54d6d7f343C.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://ae01.alicdn.com/kf/H2112a9c7867c4c038d17f293acd124c1x.jpg_Q90.jpg_.webp"
                    alt=""
                />
            </div>
        </AutoplaySlider>
    );
}

export default MainCarousel;
