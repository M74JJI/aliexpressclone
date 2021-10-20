import React from 'react';
import SmallBlock from '../SmallBlock/SmallBlock';
import './pickblock.css';
import { Link } from 'react-router-dom';
function PickBlock() {
    return (
        <div className="pickBlock">
            <div className="pickBlock-header">
                <div className="blockbefore"></div>
                <span>Featured Categories</span>
                <div className="blockafter"></div>
            </div>
            <div className="pickblock-categories">
                <div className="pick1">
                    {' '}
                    <Link to="/product/round-six-square-circle-triangle-plastic-helmet-adults-halloween-party-cos-suits-gifts-squid-game-costumes-mask-cosplay-jumpsuit">
                        Get your Squid Game Clothes Now
                    </Link>
                </div>
                <div className="pick2">
                    <SmallBlock
                        category="/category/gaming"
                        title="For Gamers"
                        link1="/product/yowu-3g-cute-cat-wireless-headphones-app-control-rgb-lights-high-quality-casco-girl-cat-ear-headset-for-phone-computer-gaming"
                        link2="/product/asus-rog-pugio-aura-rgb-usb-wired-optical-ergonomic-ambidextrous-gaming-mouse"
                        link3="/product/one-handed-keyboard-set-colorful-macro-recording-rgb-game-console-game-keyboard-converter-eating-chicken"
                        img1="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633785211/z0uctmrtxhh6kjgvylfh.jpg"
                        img2="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633785615/wsdguphhk8so5c47wah3.jpg"
                        img3="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633785931/icgdulm5fjkeicr0xqwj.jpg"
                    />
                </div>
                <div className="pick3">
                    <SmallBlock
                        category="/category/shoes"
                        title="Get you Some Shoes"
                        link1="/product/700-v1-analog-eg7597-inertia-fv5304-utility-black-fv9922-magnet-fw2498-fw2499-gz6984-b75571-og-ee9614-mauve-eg7487-salt-eg7596-shoes"
                        link2="/product/men's-basketball-shoes-breathable-cushioning-non-slip-wearable-sports-shoes-gym-training-athletic-basketball-sneakers-for-women"
                        link3="/product/sneakers-men-mesh-breathable-running-sport-shoes-unisex-light-soft-thick-sole-hole-couple-shoes-athletic-sneakers-women-shoes"
                        img1="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633788553/dpelvcu7afcxg3al34bt.jpg"
                        img2="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633790589/qzqurwuctrzynhrta7s2.jpg"
                        img3="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633791430/bjcrthjbyhzhetfx2fif.jpg"
                    />
                </div>
                <div className="pick4">
                    <SmallBlock
                        category="/category/watches"
                        title="Watches"
                        link1="/product/ciga-design-x-series-gorilla-stainless-steel-hollow-watch-automatic-mechanical-unique-wristwatch-with-silicone-and-nylon-strap"
                        img1="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633727014/pew5fas4oonmiz5vimyr.jpg"
                        link2="/product/2021-lige-new-watch-men-automatic-mechanical-tourbillon-clock-fashion-sport-diving-watch-100atm-waterproof-luminous-watches-mens"
                        img2="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633724170/dww2yxdxdczzomsak0ai.jpg"
                        img3="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633724357/satonjoc8u7w94ggmoh4.jpg"
                        link3="/product/2021-lige-new-watch-men-automatic-mechanical-tourbillon-clock-fashion-sport-diving-watch-100atm-waterproof-luminous-watches-mens"
                    />
                </div>
                <div className="pick5">
                    <SmallBlock
                        category="/category/home-improvements"
                        title="improve you home life"
                        link1="/product/macbook-automatic-toothpaste-dispenser-non-toxic-wall-hanger-mount-dust-proof-toothpaste-squeezer-quick-take-straw-toothpaste-rack-home"
                        img1="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633704739/dcmn0tgtvp1atymxuger.jpg"
                        img2="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633705138/nqxqnz6arwafk9gxrge0.jpg"
                        link2="/product/leaf-shape-soap-box-drain-soap-holder-box-bathroom-shower-soap-holder-sponge-storage-plate-tray-bathroom-supplies-bathroom-gadge"
                        link3="/product/1pcs-stainless-steel-garlic-press-manual-garlic-mincer-chopping-garlic-tools-curve-fruit-vegetable-tools-kitchen-gadgets"
                        img3="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633705563/pml8nn8lgjmf9pctthsl.jpg"
                    />
                </div>
                <div className="pick6">
                    <SmallBlock
                        category="/category/men's-fashion"
                        title="Be Classy"
                        img1="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633719373/kafwauc5rsmaf7n12jbh.jpg"
                        link1="/product/2021-new-arrivel-long-coat-designs-chinese-red-men-suit-gentle-mens-tuxedo-prom-blazer-custom-3-pieces-(jacket+vest+pants)"
                        img2="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633782026/smea7edqzpzbckjwfnj0.jpg"
                        link2="/product/2021-fashion-men-wool-and-blends-mens-casual-business-trench-coat-mens-leisure-overcoat-male-punk-style-blends-dust-coats-jackets"
                        img3="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633719583/s4kymz45ketvhf1mphr7.jpg"
                        link3="/product/2021-new-arrivel-long-coat-designs-chinese-red-men-suit-gentle-mens-tuxedo-prom-blazer-custom-3-pieces-(jacket+vest+pants)"
                    />
                </div>
                <div className="pick7">
                    <SmallBlock
                        category="/category/jewelry"
                        title="Jewelry Lovers"
                        img1="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633796193/vjog47za7j8rgszth7va.jpg"
                        img2="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633796725/lysnijvvcctheb7bi9qs.jpg"
                        img3="https://res.cloudinary.com/dfwn8qh1d/image/upload/v1633797174/tzyem1he5ev7pqcjivwo.jpg"
                        link1="/product/wong-rain-vintage-100percent-18k-solid-gold-1.8-ct-natural-emerald-gemstone-wedding-engagement-rings-customized-rings-fine-jewelry"
                        link2="/product/wong-rain-925-sterling-silver-9*18-mm-marquise-cut-created-moissanite-gemstone-temperament-cocktail-rings-ladies-fine-jewelry"
                        link3="/product/rhinestone-crystal-choker-necklace-women-punk-gothic-chokers-collier-jeweley-party-prom-silver-diamond-chain-bridal-wedding"
                    />
                </div>
            </div>
        </div>
    );
}

export default PickBlock;
