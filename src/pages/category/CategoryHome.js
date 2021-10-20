import React, { useState, useEffect } from 'react';
import {
    getProductsByCount,
    fetchProductsByFilter,
    getProducts,
} from '../../functions/product';
import {
    getCategories,
    getCategory,
    getCategorySubs,
} from '../../functions/category';
import { getSubs } from '../../functions/sub';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../components/cards/ProductCard';
import { Menu, Slider, Checkbox, Radio } from 'antd';
import Header from '../../components/nav/header/Header';
import { Link } from 'react-router-dom';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import TopHeader from '../../components/nav/topheader/TopHeader';
import {
    DollarOutlined,
    DownSquareOutlined,
    StarOutlined,
} from '@ant-design/icons';

import Star from '../../components/forms/Star';
import '../../styles/shop.css';
import WideCard from '../../components/cards/WideCard';
const { SubMenu, ItemGroup } = Menu;

const CategoryHome = ({ match }) => {
    const [products, setProducts] = useState([]);

    const [price, setPrice] = useState([0, 0]);
    const [ok, setOk] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    const [star, setStar] = useState('');
    const [subs, setSubs] = useState([]);
    const [sub, setSub] = useState('');
    const [loading, setLoading] = useState(false);
    const [subRelated, setSubRelated] = useState([]);
    const [bestMatch, setBestMatch] = useState(true);
    const [latestSelected, setLatestSelected] = useState(false);
    const [highestSelling, setHighestSelling] = useState(false);
    const [highestPrice, setHighestPrice] = useState(false);
    const [lowestPrice, setLowestPrice] = useState(false);
    const [wideCard, setWideCard] = useState(false);
    const [category, setCategory] = useState({});
    const [brands, setBrands] = useState([
        'Apple',
        'Samsung',
        'Microsoft',
        'Lenovo',
        'ASUS',
    ]);
    const { slug } = match.params;
    const [brand, setBrand] = useState('');
    const [colors, setColors] = useState([
        'Black',
        'Brown',
        'Silver',
        'White',
        'Blue',
    ]);
    const [color, setColor] = useState('');
    const [shipping, setShipping] = useState('');

    let dispatch = useDispatch();
    let { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    useEffect(() => {
        loadAllProducts();
        // fetch categories
        getCategories().then((res) => setCategories(res.data));
        // fetch subcategories
        getSubs().then((res) => setSubs(res.data));
        {
            /* getCategorySubs(e.target.value).then((res) => {
           
            setSubOptions(res.data);
        });*/
        }
    }, [latestSelected, highestSelling, highestPrice]);

    const fetchProducts = (arg) => {
        fetchProductsByFilter(arg).then((res) => {
            setProducts(res.data);
        });
    };

    // 1. load products by default on page load
    const loadAllProducts = () => {
        if (latestSelected) {
            getProducts('createdAt', 'desc', 1).then((res) => {
                setProducts(res.data);
                setLoading(false);
            });
        }
        if (highestSelling) {
            getProducts('sold', 'desc', 1).then((res) => {
                setProducts(res.data);
                setLoading(false);
            });
        }
        if (highestPrice) {
            getProducts('price', 'desc', 1).then((res) => {
                setProducts(res.data);
                setLoading(false);
            });
        }
        if (lowestPrice) {
            getProducts('price', 'asc', 1).then((res) => {
                setProducts(res.data);
                setLoading(false);
            });
        } else {
            getCategory(slug).then((res) => {
                console.log(JSON.stringify(res.data, null, 4));
                setCategory(res.data.category);
                setProducts(res.data.products);
                setLoading(false);
            });
        }
    };

    // 2. load products on user search input
    useEffect(() => {
        const delayed = setTimeout(() => {
            fetchProducts({ query: text });
            if (!text) {
                loadAllProducts();
            }
        }, 300);
        return () => clearTimeout(delayed);
    }, [text]);

    // 3. load products based on price range
    useEffect(() => {
        console.log('ok to request');
        fetchProducts({ price });
    }, [ok]);

    const handleSlider = (value) => {
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' },
        });

        // reset

        setPrice(value);

        setTimeout(() => {
            setOk(!ok);
        }, 300);
    };

    // 4. load products based on category
    // show categories in a list of checkbox
    const showCategories = () =>
        categories.map((c) => (
            <div key={c._id}>
                <Checkbox
                    onChange={handleCheck}
                    className="pb-2 pl-4 pr-4"
                    value={c._id}
                    name="category"
                    checked={categoryIds.includes(c._id)}
                >
                    {c.name}
                </Checkbox>
                <br />
            </div>
        ));

    // handle check for categories
    const handleCheck = (e) => {
        // reset
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' },
        });

        // console.log(e.target.value);
        let inTheState = [...categoryIds];
        let justChecked = e.target.value;
        let foundInTheState = inTheState.indexOf(justChecked); // index or -1

        // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
        if (foundInTheState === -1) {
            inTheState.push(justChecked);
        } else {
            // if found pull out one item from index
            inTheState.splice(foundInTheState, 1);
        }

        setCategoryIds(inTheState);
        // console.log(inTheState);
        fetchProducts({ category: inTheState });
    };

    // 5. show products by star rating
    const handleStarClick = (num) => {
        // console.log(num);
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' },
        });

        setStar(num);

        fetchProducts({ stars: num });
    };

    const showStars = () => (
        <div className="pr-4 pl-4 pb-2">
            <Star starClick={handleStarClick} numberOfStars={5} />
            <Star starClick={handleStarClick} numberOfStars={4} />
            <Star starClick={handleStarClick} numberOfStars={3} />
            <Star starClick={handleStarClick} numberOfStars={2} />
            <Star starClick={handleStarClick} numberOfStars={1} />
        </div>
    );

    // 6. show products by sub category
    const showSubs = () =>
        subs.map((s) => (
            <div
                key={s._id}
                onClick={() => handleSub(s)}
                className="p-1 m-1 badge badge-secondary"
                style={{ cursor: 'pointer' }}
            >
                {s.name}
            </div>
        ));

    const handleSub = (sub) => {
        // console.log("SUB", sub);
        setSub(sub);
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' },
        });

        fetchProducts({ sub });
    };

    // 7. show products based on brand name
    const showBrands = () =>
        brands.map((b) => (
            <Radio
                key={b}
                value={b}
                name={b}
                checked={b === brand}
                onChange={handleBrand}
                className="pb-1 pl-4 pr-4"
            >
                {b}
            </Radio>
        ));

    const handleBrand = (e) => {
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' },
        });

        setBrand(e.target.value);

        fetchProducts({ brand: e.target.value });
    };

    // 8. show products based on color
    const showColors = () =>
        colors.map((c) => (
            <Radio
                key={c}
                value={c}
                name={c}
                checked={c === color}
                onChange={handleColor}
                className="pb-1 pl-4 pr-4"
            >
                {c}
            </Radio>
        ));

    const handleColor = (e) => {
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' },
        });

        setColor(e.target.value);

        fetchProducts({ colors: e.target.value });
    };

    // 9. show products based on shipping yes/no
    const showShipping = () => (
        <>
            <Checkbox
                onChange={handleShippingchange}
                value="Yes"
                checked={shipping === 'Yes'}
            >
                Yes
            </Checkbox>

            <Checkbox
                onChange={handleShippingchange}
                value="No"
                checked={shipping === 'No'}
            >
                No
            </Checkbox>
        </>
    );

    const handleShippingchange = (e) => {
        dispatch({
            type: 'SEARCH_QUERY',
            payload: { text: '' },
        });

        setShipping(e.target.value);
        fetchProducts({ shipping: e.target.value });
    };
    const handleLatest = () => {
        setLatestSelected(true);
        setHighestSelling(false);
        setHighestPrice(false);
        setLowestPrice(false);
        setBestMatch(false);
    };
    const handlehighestSelling = () => {
        setHighestSelling(true);
        setLatestSelected(false);
        setHighestPrice(false);
        setLowestPrice(false);
        setBestMatch(false);
    };
    const handleHighestPrice = () => {
        setHighestPrice(true);
        setHighestSelling(false);
        setLatestSelected(false);
        setLowestPrice(false);
        setBestMatch(false);
    };
    const handleLowestPrice = () => {
        setLowestPrice(true);
        setHighestPrice(false);
        setHighestSelling(false);
        setLatestSelected(false);
        setBestMatch(false);
    };
    const marks = {
        0: '$0',

        50000: {
            label: <strong>$3999</strong>,
        },
    };
    return (
        <>
            <TopHeader />
            <Header />
            <div className="shop-container">
                <div className="shop">
                    <div className="shop-menu">
                        <div className="related-categories">
                            <div className="related-categories-title">
                                Related Categories
                                <ul>
                                    {categories.map((s) => (
                                        <a href={`/category/${s.slug}`}>
                                            <li>{s.name}</li>
                                        </a>
                                    ))}
                                </ul>
                            </div>
                            <div className="slider">
                                <Slider
                                    tipFormatter={(v) => `$${v}`}
                                    range
                                    value={price}
                                    onChange={handleSlider}
                                    max="50000"
                                    marks={marks}
                                    defaultValue={[0, 3999]}
                                />
                            </div>
                            <div className="stars-filter">{showStars()}</div>
                        </div>
                    </div>

                    <div className="shop-products">
                        {products.length < 1 && <p>No products found</p>}
                        <div className="products-header">
                            <div className="sort">
                                <div className="sort-span">
                                    <span className="sort-title">
                                        {' '}
                                        Sort by:
                                    </span>
                                    <span className="sort-wrapper">
                                        <span
                                            className={
                                                bestMatch
                                                    ? 'sort-item active'
                                                    : 'sort-item'
                                            }
                                        >
                                            Best Match
                                        </span>
                                        <span
                                            onClick={handlehighestSelling}
                                            className={
                                                highestSelling
                                                    ? 'sort-item active'
                                                    : 'sort-item'
                                            }
                                        >
                                            Orders
                                        </span>
                                        <span
                                            onClick={handleLatest}
                                            className={
                                                latestSelected
                                                    ? 'sort-item active'
                                                    : 'sort-item'
                                            }
                                        >
                                            Newest
                                        </span>
                                        <span
                                            onClick={handleHighestPrice}
                                            className={
                                                highestPrice
                                                    ? 'sort-item active'
                                                    : 'sort-item'
                                            }
                                        >
                                            Highest Price
                                        </span>
                                        <span
                                            onClick={handleLowestPrice}
                                            className={
                                                lowestPrice
                                                    ? 'sort-item active'
                                                    : 'sort-item'
                                            }
                                        >
                                            Lowest Price
                                        </span>
                                    </span>
                                    <div> Free shipping {showShipping()}</div>
                                </div>
                                <div className="switch-view">
                                    <HiOutlineViewGrid
                                        className={wideCard ? '' : 'orange'}
                                        onClick={() => setWideCard(false)}
                                    />
                                    <GiHamburgerMenu
                                        className={wideCard ? 'orange' : ''}
                                        onClick={() => setWideCard(true)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                wideCard
                                    ? 'product-list-container flex-column'
                                    : 'product-list-container'
                            }
                        >
                            {products.map((p) => (
                                <div key={p._id}>
                                    {wideCard ? (
                                        <WideCard product={p} />
                                    ) : (
                                        <ProductCard product={p} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryHome;

{
    /* 
import React, { useState, useEffect } from 'react';
import { getCategory } from '../../functions/category';
import ProductCard from '../../components/cards/ProductCard';
import Header from '../../components/nav/header/Header';
import TopHeader from '../../components/nav/topheader/TopHeader';
const CategoryHome = ({ match }) => {
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { slug } = match.params;

    useEffect(() => {
        setLoading(true);
        getCategory(slug).then((res) => {
            console.log(JSON.stringify(res.data, null, 4));
            setCategory(res.data.category);
            setProducts(res.data.products);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <TopHeader />
            <Header />
            <div className="row">
                <div className="col">
                    {loading ? (
                        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                            Loading...
                        </h4>
                    ) : (
                        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                            {products.length} Products in "{category.name}"
                            category
                        </h4>
                    )}
                </div>
            </div>

            <div className="row">
                {products.map((p) => (
                    <div className="col" key={p._id}>
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default CategoryHome;

*/
}
