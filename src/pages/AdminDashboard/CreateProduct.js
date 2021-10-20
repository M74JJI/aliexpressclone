import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { createProduct } from '../../functions/product';
import ProductCreateForm from '../../components/forms/ProductCreateForm';
import { getCategories, getCategorySubs } from '../../functions/category';
import FileUpload from '../../components/forms/FileUpload';
import FileUpload2 from '../../components/forms/FileUpload2';
import { LoadingOutlined } from '@ant-design/icons';

const CreateProduct = () => {
    const initialState = {
        title: 'Macbook Pro',
        description: 'This is the best Apple product',
        price: '45000',
        priceMAD: '',
        priceBefore: '55000',
        categories: [],
        category: '',
        height: '',
        width: '',
        gender: '',
        style: '',
        modalNumber: '',
        material: '',
        recommendAge: '',
        use: '',
        origin: '',
        features: '',
        type: '',
        compatible: '',
        packaging: '',
        subs: [],
        shipping: 'Yes',
        quantity: '50',

        images: [
            // {
            //   public_id: "jwrzeubemmypod99e8lz",
            //   url:
            //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480909/jwrzeubemmypod99e8lz.jpg",
            // },
            // {
            //   public_id: "j7uerlvhog1eic0oyize",
            //   url:
            //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480912/j7uerlvhog1eic0oyize.jpg",
            // },
            // {
            //   public_id: "ho6wnp7sugyemnmtoogf",
            //   url:
            //     "https://res.cloudinary.com/dcqjrwaoi/image/upload/v1599480913/ho6wnp7sugyemnmtoogf.jpg",
            // },
        ],
        imagesDesc: [],
        colors: [],
        sizes: [],
        brands: [
            'Apple',
            'Samsung',
            'Microsoft',
            'Lenovo',
            'ASUS',
            'BiggOrange',
        ],
        colorChoices: [
            'black',
            'white',
            'blue',
            'green',
            'orange',
            'silver',
            'gray',
            'brown',
            'red',
            'purple',
            'aqua',
            'yellow',
            'pink',
            'violet',
        ],
        sizeChoices: [
            'Mini',
            'Pro',
            'Max',
            'Max Pro',
            'Normal',
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL',
            '3XL',
            '4XL',
            '5XL',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
            '32',
            '33',
            '34',
            '35',
            '36',
            '37',
            '38',
            '39',
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
            '51',
        ],
        brand: '',
    };
    const [values, setValues] = useState(initialState);
    const [subOptions, setSubOptions] = useState([]);
    const [showSub, setShowSub] = useState(false);
    const [loading, setLoading] = useState(false);
    // redux
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () =>
        getCategories().then((c) =>
            setValues({ ...values, categories: c.data })
        );

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(values, user.token)
            .then((res) => {
                console.log(res);
                window.alert(`"${res.data.title}" is created`);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                // if (err.response.status === 400) toast.error(err.response.data);
                toast.error(err.response.data.err);
            });
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        // console.log(e.target.name, " ----- ", e.target.value);
    };

    const handleCatagoryChange = (e) => {
        e.preventDefault();
        console.log('CLICKED CATEGORY', e.target.value);
        setValues({ ...values, subs: [], category: e.target.value });
        getCategorySubs(e.target.value).then((res) => {
            console.log('SUB OPTIONS ON CATGORY CLICK', res);
            setSubOptions(res.data);
        });
        setShowSub(true);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    {loading ? (
                        <LoadingOutlined className="text-danger h1" />
                    ) : (
                        <h4>Product create</h4>
                    )}
                    <hr />

                    {/* {JSON.stringify(values.images)} */}

                    <div className="p-3">
                        <FileUpload
                            values={values}
                            setValues={setValues}
                            setLoading={setLoading}
                        />
                    </div>
                    <div className="p-3">
                        <FileUpload2
                            values={values}
                            setValues={setValues}
                            setLoading={setLoading}
                        />
                    </div>

                    <ProductCreateForm
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        setValues={setValues}
                        values={values}
                        handleCatagoryChange={handleCatagoryChange}
                        subOptions={subOptions}
                        showSub={showSub}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
