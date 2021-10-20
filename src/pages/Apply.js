import React, { useEffect, useState } from 'react';
import '../styles/apply.css';
import { Link } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Avatar, Badge } from 'antd';
import { toast } from 'react-toastify';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { CgDanger } from 'react-icons/cg';
import { LoadingOutlined } from '@ant-design/icons';
import { createSellerApp } from '../functions/sellerApp';
function Apply({ history }) {
    const { user } = useSelector((state) => ({ ...state }));
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [idImages, setIdImages] = useState([]);
    const [vatImages, setVatImages] = useState([]);
    const [idNum, setIdNum] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [businessType, setBusinessType] = useState('');
    const businessOptions = [
        'Self-employed Individual',
        'Privately-owned business',
        'Publicly-listed business',
        'State-owned business',
    ];

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = async () => {
        const countries = await axios
            .get('http://restcountries.eu/rest/v2/all')
            .then((res) => setCountries(res.data));
    };

    const submitApply = () => {
        createSellerApp(
            user.token,
            user,
            name,
            gender,
            country,
            address,
            idImages,
            vatImages,
            idNum,
            companyAddress,
            businessType
        ).then(
            toast.success('application has been sent we will email you soon')
        );
    };

    const handleActive1 = () => {
        setActive1(true);
        setActive2(false);
        setActive3(false);
    };
    const handleActive2 = () => {
        setActive2(true);
        setActive1(false);
        setActive3(false);
    };
    const handleActive3 = () => {
        setActive1(false);
        setActive2(false);
        setActive3(true);
    };
    const fileUpload = (e) => {
        // console.log(e.target.files);
        // resize
        let files = e.target.files; // 3
        let allUploadedFiles = idImages;

        if (files) {
            setLoading(true);
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(
                    files[i],
                    720,
                    720,
                    'JPEG',
                    100,
                    0,
                    (uri) => {
                        // console.log(uri);
                        axios
                            .post(
                                `${process.env.REACT_APP_API}/uploadimages`,
                                { image: uri },
                                {
                                    headers: {
                                        authtoken: user ? user.token : '',
                                    },
                                }
                            )
                            .then((res) => {
                                console.log('IMAGE UPLOAD RES DATA', res);
                                setLoading(false);
                                allUploadedFiles.push(res.data);

                                setIdImages(allUploadedFiles);
                            })
                            .catch((err) => {
                                setLoading(false);
                                console.log('CLOUDINARY UPLOAD ERR', err);
                            });
                    },
                    'base64'
                );
            }
        }
        // send back to server to upload to cloudinary
        // set url to images[] in the parent component state - ProductCreate
    };

    const handleImageRemove = (public_id) => {
        setLoading(true);
        // console.log("remove image", public_id);
        axios
            .post(
                `${process.env.REACT_APP_API}/removeimage`,
                { public_id },
                {
                    headers: {
                        authtoken: user ? user.token : '',
                    },
                }
            )
            .then((res) => {
                setLoading(false);
                const { images } = idImages;
                let filteredImages = images.filter((item) => {
                    return item.public_id !== public_id;
                });
                setIdImages(filteredImages);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const fileUpload1 = (e) => {
        // console.log(e.target.files);
        // resize
        let files = e.target.files; // 3
        let allUploadedFiles = vatImages;

        if (files) {
            setLoading(true);
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(
                    files[i],
                    720,
                    720,
                    'JPEG',
                    100,
                    0,
                    (uri) => {
                        // console.log(uri);
                        axios
                            .post(
                                `${process.env.REACT_APP_API}/uploadimages`,
                                { image: uri },
                                {
                                    headers: {
                                        authtoken: user ? user.token : '',
                                    },
                                }
                            )
                            .then((res) => {
                                console.log('IMAGE UPLOAD RES DATA', res);
                                setLoading(false);
                                allUploadedFiles.push(res.data);

                                setVatImages(allUploadedFiles);
                            })
                            .catch((err) => {
                                setLoading(false);
                                console.log('CLOUDINARY UPLOAD ERR', err);
                            });
                    },
                    'base64'
                );
            }
        }
        // send back to server to upload to cloudinary
        // set url to images[] in the parent component state - ProductCreate
    };

    const handleImageRemove1 = (public_id) => {
        setLoading(true);
        // console.log("remove image", public_id);
        axios
            .post(
                `${process.env.REACT_APP_API}/removeimage`,
                { public_id },
                {
                    headers: {
                        authtoken: user ? user.token : '',
                    },
                }
            )
            .then((res) => {
                setLoading(false);

                let filteredImages = vatImages.filter((item) => {
                    return item.public_id !== public_id;
                });
                setIdImages(filteredImages);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };
    return (
        <div>
            <header className="apply-header">
                <div className="apply-header-container">
                    <Link to="/">
                        {' '}
                        <img
                            src="https://ae01.alicdn.com/kf/H625cd629fe984c719391fc7289edb4a72.png"
                            alt=""
                        />
                    </Link>
                    <div className="apply-menu">
                        <Link>User Manual</Link>
                        <Link>Help Center</Link>
                        <Link>Seller Log In</Link>
                    </div>
                </div>
            </header>
            {user.sentApp ? (
                'you already applied wait for reply'
            ) : (
                <>
                    <div className="apply-steps">
                        <div className="apply-step">
                            <span className={active1 && 'apply-active'}>1</span>
                            <span>Create account</span>
                        </div>
                        <div className="apply-step">
                            <span className={active2 && 'apply-active'}>2</span>{' '}
                            <span>Business information</span>
                        </div>
                        <div className="apply-step">
                            <span className={active3 && 'apply-active'}>3</span>{' '}
                            <span>Application review</span>
                        </div>
                    </div>
                    <div className="apply-modal">
                        {active1 && (
                            <div className="apply-1">
                                <h2>Personnal Informations</h2>
                                <div className="control-form">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="control-form">
                                    <label htmlFor="gender">Gender</label>
                                    <input
                                        type="text"
                                        name="gender"
                                        value={gender}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="control-form">
                                    <label htmlFor="country">Country</label>
                                    <select
                                        value={country}
                                        onChange={(e) =>
                                            setCountry(e.target.value)
                                        }
                                    >
                                        {countries.map((c) => (
                                            <option value={c.name}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>{' '}
                                <div className="control-form">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="control-form">
                                    <label htmlFor="idNum">
                                        Id Card or passport number
                                    </label>
                                    <input
                                        type="text"
                                        name="idNum"
                                        value={idNum}
                                        onChange={(e) =>
                                            setIdNum(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="control-form">
                                    <label htmlFor="idNum">
                                        Profile of Legal Person (passport, ID
                                        card)
                                    </label>
                                    <>
                                        <div className="row">
                                            {loading ? (
                                                <LoadingOutlined className="text-danger h1" />
                                            ) : (
                                                idImages &&
                                                idImages.map((image) => (
                                                    <Badge
                                                        count="X"
                                                        key={image.public_id}
                                                        onClick={() =>
                                                            handleImageRemove(
                                                                image.public_id
                                                            )
                                                        }
                                                        style={{
                                                            cursor: 'pointer',
                                                        }}
                                                    >
                                                        <Avatar
                                                            src={image.url}
                                                            size={100}
                                                            shape="square"
                                                            className="ml-3"
                                                        />
                                                    </Badge>
                                                ))
                                            )}
                                        </div>
                                        <div className="row">
                                            <label
                                                className="join-sell-btn"
                                                style={{ color: 'white' }}
                                            >
                                                Choose File
                                                <input
                                                    type="file"
                                                    multiple
                                                    hidden
                                                    accept="images/*"
                                                    onChange={fileUpload}
                                                />
                                            </label>
                                        </div>
                                    </>
                                    <button
                                        className="next-btn"
                                        onClick={handleActive2}
                                        style={{ marginTop: '1rem' }}
                                    >
                                        Next
                                    </button>
                                </div>{' '}
                            </div>
                        )}
                        {active2 && (
                            <div className="apply-1">
                                <h2>Business Informations</h2>
                                <div className="control-form">
                                    <label htmlFor="businessType">
                                        Business Type
                                    </label>
                                    <select
                                        value={businessType}
                                        onChange={(e) =>
                                            setBusinessType(e.target.value)
                                        }
                                    >
                                        {businessOptions.map((c) => (
                                            <option value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="control-form">
                                    <label htmlFor="companyAddress">
                                        Company Address
                                    </label>
                                    <input
                                        type="text"
                                        name="companyAddress"
                                        value={companyAddress}
                                        onChange={(e) =>
                                            setCompanyAddress(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="control-form">
                                    <label htmlFor="idNum">
                                        VAT Registration Certificate
                                    </label>
                                    <>
                                        <div className="row">
                                            {loading ? (
                                                <LoadingOutlined className="text-danger h1" />
                                            ) : (
                                                idImages &&
                                                vatImages.map((image) => (
                                                    <Badge
                                                        count="X"
                                                        key={image.public_id}
                                                        onClick={() =>
                                                            handleImageRemove1(
                                                                image.public_id
                                                            )
                                                        }
                                                        style={{
                                                            cursor: 'pointer',
                                                        }}
                                                    >
                                                        <Avatar
                                                            src={image.url}
                                                            size={100}
                                                            shape="square"
                                                            className="ml-3"
                                                        />
                                                    </Badge>
                                                ))
                                            )}
                                        </div>
                                        <div className="row">
                                            <label
                                                className="join-sell-btn"
                                                style={{ color: 'white' }}
                                            >
                                                Choose File
                                                <input
                                                    type="file"
                                                    multiple
                                                    hidden
                                                    accept="images/*"
                                                    onChange={fileUpload1}
                                                />
                                            </label>
                                        </div>
                                    </>
                                    <button
                                        className="next-btn"
                                        onClick={handleActive3}
                                        style={{ marginTop: '1rem' }}
                                    >
                                        Next
                                    </button>
                                </div>{' '}
                            </div>
                        )}{' '}
                        {/* */}
                        {active3 && (
                            <div className="apply-3">
                                {name &&
                                address &&
                                gender &&
                                country &&
                                idNum &&
                                businessType &&
                                companyAddress &&
                                idImages &&
                                vatImages ? (
                                    <div className="infos-entered">
                                        <div className="entred-info">
                                            <span>Name:</span>
                                            <span>{name}</span>
                                        </div>
                                        <div className="entred-info">
                                            <span>Gender:</span>
                                            <span>{gender}</span>
                                        </div>
                                        <div className="entred-info">
                                            <span>Country:</span>
                                            <span>{country}</span>
                                        </div>
                                        <div className="entred-info">
                                            <span>Address:</span>
                                            <span>{address}</span>
                                        </div>
                                        <div className="entred-info">
                                            <span>ID number:</span>
                                            <span>{idNum}</span>
                                        </div>
                                        <div className="entred-info">
                                            <span>Business Type:</span>
                                            <span>{businessType}</span>
                                        </div>
                                        <div className="entred-info">
                                            <span>Company Address:</span>
                                            <span>{companyAddress}</span>
                                        </div>
                                        <div className="entred-info1">
                                            <span>Files attached:</span>

                                            <span>
                                                {idImages &&
                                                    idImages.map((image) => (
                                                        <Badge
                                                            count="X"
                                                            key={
                                                                image.public_id
                                                            }
                                                            onClick={() =>
                                                                handleImageRemove(
                                                                    image.public_id
                                                                )
                                                            }
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            <Avatar
                                                                src={image.url}
                                                                size={100}
                                                                shape="square"
                                                                className="ml-3"
                                                            />
                                                        </Badge>
                                                    ))}
                                                {vatImages &&
                                                    vatImages.map((image) => (
                                                        <Badge
                                                            count="X"
                                                            key={
                                                                image.public_id
                                                            }
                                                            onClick={() =>
                                                                handleImageRemove1(
                                                                    image.public_id
                                                                )
                                                            }
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            <Avatar
                                                                src={image.url}
                                                                size={100}
                                                                shape="square"
                                                                className="ml-3"
                                                            />
                                                        </Badge>
                                                    ))}
                                            </span>
                                        </div>
                                        <button
                                            onClick={submitApply}
                                            className="join-sell-btn"
                                        >
                                            Save
                                        </button>
                                    </div>
                                ) : (
                                    <span className="fill-infos">
                                        <CgDanger className="danger-icon" />{' '}
                                        fill all informations first
                                    </span>
                                )}
                            </div>
                        )}{' '}
                        <div className="change-directions">
                            {active2 || active3 ? (
                                <AiOutlineArrowLeft
                                    onClick={
                                        active2 ? handleActive1 : handleActive2
                                    }
                                />
                            ) : (
                                ''
                            )}
                            {active1 || active2 ? (
                                <AiOutlineArrowRight
                                    onClick={
                                        active1 ? handleActive2 : handleActive3
                                    }
                                />
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Apply;
