import TextArea from 'rc-textarea';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/nav/header/Header';
import { createStore } from '../../functions/store';
import '../../styles/createstore.css';
function Store() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { user } = useSelector((state) => ({ ...state }));
    const submit = () => {
        createStore(user.token, name, description, user);
    };

    return (
        <>
            <Header />
            <div className="create-store-container">
                {user.hasStore ? (
                    <div className="create-store">
                        <div className="createStore-form">
                            <h4>Create Store</h4>
                            <div className="create-store-item">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="create-store-item">
                                <label htmlFor="description">Description</label>
                                <TextArea
                                    type="text"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                            <button
                                onClick={submit}
                                className="join-sell-btn"
                                style={{
                                    color: '#fff',
                                    fontWeight: '600',
                                    width: '100px',
                                }}
                            >
                                Create Store
                            </button>
                        </div>
                    </div>
                ) : (
                    'you already Created a store'
                )}
            </div>
        </>
    );
}

export default Store;
