import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductScreen from '../components/ProductScreen';
import {
    getProduct,
    productStar,
    getRelated,
    getStoreProducts,
} from '../functions/product';
import { getStore } from '../functions/store';
import { toast } from 'react-toastify';

function Product({ match, history }) {
    const [product, setProduct] = useState({});
    const [related, setRelated] = useState([]);
    const slug = match.params.slug;
    const [comment, setComment] = useState('');
    const [star, setStar] = useState(0);
    const [id, setId] = useState('');
    const { user } = useSelector((state) => ({ ...state }));
    const [showModal, setShowModal] = useState(false);
    const [storeProducts, setStoreProducts] = useState([]);
    const [storeId, setStoreId] = useState('');

    const handleModal = () => {
        if (user && user.token) {
            setShowModal(true);
        } else {
            history.push({
                pathname: '/login',
                state: { from: `/product/${slug}` },
            });
        }
    };

    useEffect(() => {
        loadProduct();
        getStoreProducst();
    }, [slug, related]);

    useEffect(() => {
        if (product.ratings && user) {
            let existingRatingObject = product.ratings.find(
                (ele) => ele.postedBy.toString() === user._id.toString()
            );
            existingRatingObject && setStar(existingRatingObject.star); // current user's star
            existingRatingObject && setComment(existingRatingObject.comment); // current user's star
        }
    }, [user]);
    const loadProduct = () => {
        getProduct(slug).then((res) => {
            setProduct(res.data);
            setStoreId(res.data.store._id);
            getRelated(res.data._id).then((res) => setRelated(res.data));
        });
    };
    const getStoreProducst = async () => {
        getStore(storeId).then((res) => {
            setStoreProducts(res.data.products);
        });
    };

    const onStarClick = (newRating, name) => {
        setStar(newRating);
        setId(name);
    };
    const handleCommentChange = (e, id) => {
        e.preventDefault();
        setComment(e.target.value);
    };

    const handleOk = () => {
        !comment
            ? window.alert('add a comment')
            : productStar(id, star, comment, user.token).then((res) => {
                  console.log(res.data);
                  setShowModal(false);
                  toast.success('Review has been submited');
                  loadProduct();
              });
    };
    return (
        <div className="container-fluid">
            <div className="row pt-4">
                <ProductScreen
                    product={product}
                    onStarClick={onStarClick}
                    handleCommentChange={handleCommentChange}
                    star={star}
                    comment={comment}
                    handleOk={handleOk}
                    handleModal={handleModal}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    related={related}
                    storeProducts={storeProducts}
                />
            </div>
        </div>
    );
}

export default Product;
