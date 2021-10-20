import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CategoryMenu.css';
import { GiLargeDress, GiWatch } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import { IoShirtOutline } from 'react-icons/io5';

function CategoryMenu() {
    return (
        <div className="CategoryMenu_container">
            <div className="second-container">
                <ul>
                    <Link className="MenuLink active" to="">
                        <li>
                            <span className="title">Categories</span>
                        </li>
                    </Link>
                    <li>
                        <Link
                            className="MenuLink"
                            to="/category/women's-fashion"
                        >
                            <span className="s1">Women's Fashion</span>
                        </Link>
                        <div className="sub_menu">
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">Women's Fashion</Link>
                                    </strong>
                                    <li>
                                        <Link to="/sub/dresses">Dresses</Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/tees">Tees</Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/blouses-and-shirts">
                                            Blouses & Shirts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/hoodies-and-sweatshirts">
                                            Hoodies & Sweatshirts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/women's-sets">
                                            Women's Sets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/suits-and-blazers">
                                            Suits & Blazers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/bodysuits">
                                            Bodysuits
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="tanks-and-camis">
                                            Tanks & Camis
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/coats-and-jackets">
                                            Coats & Jackets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/sweaters">Sweaters</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="/sub/swimwear">Swimwear</Link>
                                    </strong>
                                    <li>
                                        <Link to="/sub/bikini-seats">
                                            Bikini Sets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="cover-ups">Cover-Ups</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="/sub/bottoms">Bottoms</Link>
                                    </strong>
                                    <li>
                                        <Link to="/sub/leggings">Leggings</Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/skirts">Skirts</Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/shorts">Shorts</Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/jeans">Jeans</Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/pants-and-capris">
                                            Pants & Capris
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="/sub/weddings-and-events">
                                            Weddings & Events
                                        </Link>
                                    </strong>
                                    <li>
                                        <Link to="/sub/wedding-dresses">
                                            Wedding Dresses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/prom-dresses">
                                            Prom Dresses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/evening-dresses">
                                            Evening Dresses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/africa-clothing">
                                            Africa Clothing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/cosplay-costumes">
                                            Cosplay Costumes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="/sub/women's-underwear">
                                            Women's Underwear
                                        </Link>
                                    </strong>
                                    <li>
                                        <Link to="/sub/pajama-sets">
                                            Pajama Sets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/bras">Bras</Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/panties">Panties</Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/women's-socks">
                                            Women's Socks
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/bra-and-brief-sets">
                                            Bra & Brief Sets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/shapewear">
                                            Shapewear
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="/sub/acessories">
                                            Accessories
                                        </Link>
                                    </strong>
                                    <li>
                                        <Link to="/sub/hair-acessories">
                                            Hair Accessories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/sunglasses">
                                            Sunglasses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/blue-light-blocking-glasses">
                                            Blue Light Blocking Glasses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/baseball-caps">
                                            Baseball Caps
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/bucket-hats">
                                            Bucket Hats
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sub/belts">Belts</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-pic">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hfbef0f9ab1ce460b9a08b5aa5bfb37721.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H0893767083924b30b7343e52e67cd9927.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H15ce70b2f3394e8aa15ef975b50169d1v.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H2b9128eb2ad44a7090bdc180153326b9l.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hbe17d809e54442e0a0d733b2b2b74591x.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H92fe221920214d1e83b3e214f022cb2bh.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Ha0624f5fde35476e9f8a32e8d6446cbfj.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H11a3f8c5492c4ce692d23a9daa9e5038h.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hcde7ae67519d49569775b3ac416b7de4X.jpg" />
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H93df7dcd33bc444bb9e1c6a163a1715co.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H92fa0b534e064e818b7a9d309d9b054cv.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Ha0be16c0f8d94e8c8185cb0872ddafe6p.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H637ac8ecb6ee4613a6634b407f8a2f3dS.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H3c8fd1e624974d0cb0a62b72b963efb7S.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H6235184177224cb8851d0d583a2f4299s.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H4d3e482ce2b94cc8b38e9b1104330b3e3.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hba7197c7e0da4752a3ec13484d97fc2dT.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hcc040004a607455bb6232e99003ddd31a.jpg" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/men's-fashion">
                            <span className="s2">Men's Fashion</span>
                        </Link>
                        <div className="sub_menu">
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">Hot Sale</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Hoodies & Sweatshirts</Link>
                                    </li>
                                    <li>
                                        <Link to="">T-Shirts</Link>
                                    </li>
                                    <li>
                                        <Link to="">Shirts</Link>
                                    </li>
                                    <li>
                                        <Link to="">Casual Shorts</Link>
                                    </li>
                                    <li>
                                        <Link to="">Men's Sets</Link>
                                    </li>
                                    <li>
                                        <Link to="">Jackets</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">Bottoms</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Casual Pants</Link>
                                    </li>
                                    <li>
                                        <Link to="">Sweatpants</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cargo Pants</Link>
                                    </li>
                                    <li>
                                        <Link to="">Jeans</Link>
                                    </li>
                                    <li>
                                        <Link to="">Harem Pants</Link>
                                    </li>
                                    <li>
                                        <Link to="">Shorts</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">Outerwear & Jackets</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Jackets</Link>
                                    </li>
                                    <li>
                                        <Link to="">Sweaters</Link>
                                    </li>
                                    <li>
                                        <Link to="">Casual Faux Leather</Link>
                                    </li>
                                    <li>
                                        <Link to="">Genuine Leather</Link>
                                    </li>
                                    <li>
                                        <Link to="">Parkas</Link>
                                    </li>
                                    <li>
                                        <Link to="">Down Jackets</Link>
                                    </li>
                                    <li>
                                        <Link to="">Suits & Blazer</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">
                                            Underwear & Loungewear
                                        </Link>
                                    </strong>
                                    <li>
                                        <Link to="">Boxers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Briefs</Link>
                                    </li>
                                    <li>
                                        <Link to="">Long Johns</Link>
                                    </li>
                                    <li>
                                        <Link to="">Men's Sleep & Lounge</Link>
                                    </li>
                                    <li>
                                        <Link to="">Pajama Sets</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">Accessories</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Scarves</Link>
                                    </li>
                                    <li>
                                        <Link to="">Skullies & Beanies</Link>
                                    </li>
                                    <li>
                                        <Link to="">Prescription Glasses</Link>
                                    </li>
                                    <li>
                                        <Link to="">Gloves & Mittens</Link>
                                    </li>
                                    <li>
                                        <Link to="">Belts</Link>
                                    </li>
                                    <li>
                                        <Link to="">Bomber Hats</Link>
                                    </li>
                                    <li>
                                        <Link to="">Fedoras</Link>
                                    </li>
                                    <li>
                                        <Link to="">Berets</Link>
                                    </li>
                                    <li>
                                        <Link to="">Baseball Caps</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">Novelty & Special Use</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Cosplay Costumes</Link>
                                    </li>
                                    <li>
                                        <Link to="">Stage & Dance Wear</Link>
                                    </li>
                                    <li>
                                        <Link to="">Exotic Apparel</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-pic">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hfbef0f9ab1ce460b9a08b5aa5bfb37721.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H0893767083924b30b7343e52e67cd9927.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H15ce70b2f3394e8aa15ef975b50169d1v.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H2b9128eb2ad44a7090bdc180153326b9l.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hbe17d809e54442e0a0d733b2b2b74591x.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H92fe221920214d1e83b3e214f022cb2bh.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Ha0624f5fde35476e9f8a32e8d6446cbfj.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H11a3f8c5492c4ce692d23a9daa9e5038h.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hcde7ae67519d49569775b3ac416b7de4X.jpg" />
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H93df7dcd33bc444bb9e1c6a163a1715co.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H92fa0b534e064e818b7a9d309d9b054cv.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Ha0be16c0f8d94e8c8185cb0872ddafe6p.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H637ac8ecb6ee4613a6634b407f8a2f3dS.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H3c8fd1e624974d0cb0a62b72b963efb7S.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H6235184177224cb8851d0d583a2f4299s.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H4d3e482ce2b94cc8b38e9b1104330b3e3.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hba7197c7e0da4752a3ec13484d97fc2dT.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hcc040004a607455bb6232e99003ddd31a.jpg" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/phones">
                            <span className="s3"> Phones </span>
                        </Link>
                        &nbsp;&&nbsp;
                        <Link
                            className="MenuLink"
                            to="/category/communications"
                        >
                            Communications
                        </Link>
                        <div className="sub_menu">
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">Mobile Phones</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Android Phones</Link>
                                    </li>
                                    <li>
                                        <Link to="">iPhones</Link>
                                    </li>
                                    <li>
                                        <Link to="">Feature Phones</Link>
                                    </li>
                                    <li>
                                        <Link to="">Refurbished Phones</Link>
                                    </li>
                                    <li>
                                        <Link to="">8GB RAM</Link>
                                    </li>
                                    <li>
                                        <Link to="">5G Phones</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">Hot Brands</Link>
                                    </strong>
                                    <li>
                                        <Link to="">realme</Link>
                                    </li>
                                    <li>
                                        <Link to="">OnePlus</Link>
                                    </li>
                                    <li>
                                        <Link to="">HUAWEI</Link>
                                    </li>
                                    <li>
                                        <Link to="">infinix</Link>
                                    </li>
                                    <li>
                                        <Link to="">POCO</Link>
                                    </li>
                                    <li>
                                        <Link to="">UMIDIGI</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">
                                            Mobile Phone Accessories
                                        </Link>
                                    </strong>
                                    <li>
                                        <Link to="">Cases & Covers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cables</Link>
                                    </li>
                                    <li>
                                        <Link to="">Chargers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Power Bank</Link>
                                    </li>
                                    <li>
                                        <Link to="">Holders & Stands</Link>
                                    </li>
                                    <li>
                                        <Link to="">Screen Protectors</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">Hot Cases & Covers</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Cases For iPhone</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For Samsung</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For Huawei</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For Xiaomi</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For Meizu</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For OPPO</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">Featured Accessories</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Wireless Chargers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Car Chargers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Lenses</Link>
                                    </li>
                                    <li>
                                        <Link to="">Adapters & Converters</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">Mobile Phone Parts</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Phone LCDs</Link>
                                    </li>
                                    <li>
                                        <Link to="">Phone Batteries</Link>
                                    </li>
                                    <li>
                                        <Link to="">Housings & Frames</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-pic">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hfbef0f9ab1ce460b9a08b5aa5bfb37721.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H0893767083924b30b7343e52e67cd9927.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H15ce70b2f3394e8aa15ef975b50169d1v.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H2b9128eb2ad44a7090bdc180153326b9l.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hbe17d809e54442e0a0d733b2b2b74591x.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H92fe221920214d1e83b3e214f022cb2bh.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Ha0624f5fde35476e9f8a32e8d6446cbfj.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H11a3f8c5492c4ce692d23a9daa9e5038h.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hcde7ae67519d49569775b3ac416b7de4X.jpg" />
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H93df7dcd33bc444bb9e1c6a163a1715co.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H92fa0b534e064e818b7a9d309d9b054cv.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Ha0be16c0f8d94e8c8185cb0872ddafe6p.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H637ac8ecb6ee4613a6634b407f8a2f3dS.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H3c8fd1e624974d0cb0a62b72b963efb7S.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H6235184177224cb8851d0d583a2f4299s.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H4d3e482ce2b94cc8b38e9b1104330b3e3.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hba7197c7e0da4752a3ec13484d97fc2dT.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hcc040004a607455bb6232e99003ddd31a.jpg" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/computer">
                            <span className="s4">Computer,</span>
                        </Link>
                        <Link className="MenuLink" to="/category/office">
                            Office
                        </Link>{' '}
                        &nbsp;&&nbsp;
                        <Link className="MenuLink" to="/category/security">
                            Security
                        </Link>
                        <div className="sub_menu">
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">Mobile Phones</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Android Phones</Link>
                                    </li>
                                    <li>
                                        <Link to="">iPhones</Link>
                                    </li>
                                    <li>
                                        <Link to="">Feature Phones</Link>
                                    </li>
                                    <li>
                                        <Link to="">Refurbished Phones</Link>
                                    </li>
                                    <li>
                                        <Link to="">8GB RAM</Link>
                                    </li>
                                    <li>
                                        <Link to="">5G Phones</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">Hot Brands</Link>
                                    </strong>
                                    <li>
                                        <Link to="">realme</Link>
                                    </li>
                                    <li>
                                        <Link to="">OnePlus</Link>
                                    </li>
                                    <li>
                                        <Link to="">HUAWEI</Link>
                                    </li>
                                    <li>
                                        <Link to="">infinix</Link>
                                    </li>
                                    <li>
                                        <Link to="">POCO</Link>
                                    </li>
                                    <li>
                                        <Link to="">UMIDIGI</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">
                                            Mobile Phone Accessories
                                        </Link>
                                    </strong>
                                    <li>
                                        <Link to="">Cases & Covers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cables</Link>
                                    </li>
                                    <li>
                                        <Link to="">Chargers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Power Bank</Link>
                                    </li>
                                    <li>
                                        <Link to="">Holders & Stands</Link>
                                    </li>
                                    <li>
                                        <Link to="">Screen Protectors</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">Hot Cases & Covers</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Cases For iPhone</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For Samsung</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For Huawei</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For Xiaomi</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For Meizu</Link>
                                    </li>
                                    <li>
                                        <Link to="">Cases For OPPO</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-menu">
                                <ul>
                                    <strong>
                                        <Link to="">Featured Accessories</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Wireless Chargers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Car Chargers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Lenses</Link>
                                    </li>
                                    <li>
                                        <Link to="">Adapters & Converters</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <strong>
                                        <Link to="">Mobile Phone Parts</Link>
                                    </strong>
                                    <li>
                                        <Link to="">Phone LCDs</Link>
                                    </li>
                                    <li>
                                        <Link to="">Phone Batteries</Link>
                                    </li>
                                    <li>
                                        <Link to="">Housings & Frames</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sub_menu-pic">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hfbef0f9ab1ce460b9a08b5aa5bfb37721.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H0893767083924b30b7343e52e67cd9927.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H15ce70b2f3394e8aa15ef975b50169d1v.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H2b9128eb2ad44a7090bdc180153326b9l.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hbe17d809e54442e0a0d733b2b2b74591x.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H92fe221920214d1e83b3e214f022cb2bh.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Ha0624f5fde35476e9f8a32e8d6446cbfj.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H11a3f8c5492c4ce692d23a9daa9e5038h.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hcde7ae67519d49569775b3ac416b7de4X.jpg" />
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H93df7dcd33bc444bb9e1c6a163a1715co.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H92fa0b534e064e818b7a9d309d9b054cv.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Ha0be16c0f8d94e8c8185cb0872ddafe6p.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H637ac8ecb6ee4613a6634b407f8a2f3dS.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H3c8fd1e624974d0cb0a62b72b963efb7S.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H6235184177224cb8851d0d583a2f4299s.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/H4d3e482ce2b94cc8b38e9b1104330b3e3.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hba7197c7e0da4752a3ec13484d97fc2dT.jpg" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src="//ae01.alicdn.com/kf/Hcc040004a607455bb6232e99003ddd31a.jpg" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/electronics">
                            <span className="s5">Consumer Electronics</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/jewelry">
                            <span className="s6">Jewelry </span>
                        </Link>
                        &nbsp;&&nbsp;
                        <Link className="MenuLink" to="/category/watches">
                            Watches
                        </Link>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/home">
                            <span className="s7">Home,</span>
                        </Link>
                        <Link className="MenuLink" to="/category/pet">
                            Pet
                        </Link>
                        &nbsp;&&nbsp;
                        <Link className="MenuLink" to="/category/appliances">
                            Appliances
                        </Link>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/bags">
                            <span className="s8"> Bags </span>
                        </Link>
                        &nbsp;&&nbsp;
                        <Link className="MenuLink" to="/category/shoes">
                            Shoes
                        </Link>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/toys">
                            <span className="s9"> Toys,</span>
                        </Link>
                        <Link className="MenuLink" to="/category/lids">
                            Lids
                        </Link>
                        &nbsp;&&nbsp;
                        <Link className="MenuLink" to="/category/babies">
                            Babies
                        </Link>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/sports">
                            <span className="s10"> Outdoor Fun & Sports</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/beauty-health">
                            <span className="s11">Beauty, Health</span>
                        </Link>
                        &nbsp;&&nbsp;
                        <Link className="MenuLink" to="/category/hair">
                            Hair
                        </Link>
                        <div className="sub_menu"></div>
                    </li>
                    <li>
                        <Link className="MenuLink" to="/category/automobiles">
                            <span className="s12">Automobiles</span>
                        </Link>
                        &nbsp;&&nbsp;
                        <Link className="MenuLink" to="/category/motorcycles">
                            Motorcycles
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="MenuLink"
                            to="/category/home-improvements"
                        >
                            <span className="s13">Home Improvement</span>
                        </Link>
                        &nbsp;&&nbsp;
                        <Link className="MenuLink" to="/category/tools">
                            Tools
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CategoryMenu;
