import React, { useState } from 'react';
import { Modal, button } from 'antd';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { StarOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
function RatingModal({
    children,
    handleOk,
    handleModal,
    showModal,
    setShowModal,
}) {
    const history = useHistory();
    const { slug } = useParams();
    const { user } = useSelector((state) => ({ ...state }));

    return (
        <>
            <div onClick={handleModal} className="starcontainer">
                {user ? (
                    <button>
                        Add Review <AiOutlineStar />
                    </button>
                ) : (
                    'Login to leave review'
                )}
            </div>
            <Modal
                title="Leave a Review"
                centered
                visible={showModal}
                onOk={handleOk}
                onCancel={() => {
                    setShowModal(false);
                }}
            >
                {children}
            </Modal>
        </>
    );
}

export default RatingModal;
{
    /*  onOk={() => {
                    setShowModal(false);
                    toast.success('Review has been submited');
                }}*/
}
