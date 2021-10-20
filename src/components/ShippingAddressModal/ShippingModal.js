import React, { useEffect, useState } from 'react';
import './shippingmodal.css';
import axios from 'axios';
import { Select } from 'antd';
import { getUserCart, saveUserAddress } from '../../functions/user';
import { toast } from 'react-toastify';
import { IoIosClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;
function ShippingModal({ showShipping, setShowShipping }) {
    const [addressSaved, setAddressSaved] = useState(false);
    const [countries, setCountries] = useState([]);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state }));
    const address = {
        name,
        phoneNumber,
        address1,
        address2,
        country,
        state,
        zipCode,
        city,
    };
    useEffect(() => {
        getUserCart(user.token).then((res) => {
            setProducts(res.data.products);
            setTotal(res.data.cartTotal);
        });
    });
    useEffect(() => {
        getCountries();
        console.log(countries);
    }, []);

    const getCountries = async () => {
        const countries = await axios
            .get('http://restcountries.eu/rest/v2/all')
            .then((res) => setCountries(res.data));
    };
    const saveAddressToDb = () => {
        saveUserAddress(user.token, address).then((res) => {
            if (res.data.ok) {
                setAddressSaved(true);
                setShowShipping(false);
                toast.success('address saved successfully');
            }
        });
    };
    return (
        <div className="shippingmodal">
            <IoIosClose
                className="close-modal"
                onClick={() => setShowShipping(false)}
            />
            <div className="shippingmodal-title">Update address</div>
            <div className="shippingmodal-contact-title">Contact</div>
            <div className="shippingmodal-contact">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                />
            </div>
            <div className="shippingmodal-contact-title">Address</div>
            <div className="shippingmodal-contact">
                <input
                    type="text"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    placeholder="Street,house/apartement/unit"
                />
                <input
                    type="text"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    placeholder="Apt, Suite, Unit, etc. (Optional)
                    "
                />
            </div>

            <div className="shippingmodal-forinputs">
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    {countries.map((c) => (
                        <option value={c.name}>{c.name}</option>
                    ))}
                </select>
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="State/Province/Region
                    "
                />
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City
                    "
                />
                <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="Zip Code
                    "
                />
            </div>
            <button className="address-btn" onClick={saveAddressToDb}>
                Save and Continues
            </button>
        </div>
    );
}

export default ShippingModal;
