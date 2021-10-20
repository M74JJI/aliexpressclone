import React from 'react';
import { Card } from 'antd';
import laptop from '../../images/laptop.png';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import '../../styles/adminproductCard.css';
const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove }) => {
    // destructure
    const { title, description, images, slug } = product;

    return (
        <div className="adminCard">
            <img src={images && images.length ? images[0].url : ''} alt="" />
            <div className="adminCard__infos">
                <span>{title.substring(0, 20)}...</span>
                <div className="adminCardIocns">
                    <Link to={`/admin/product/${slug}`}>
                        <FiEdit className="text-primary" />
                    </Link>
                    <RiDeleteBin5Line
                        onClick={() => handleRemove(slug)}
                        className="text-danger"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminProductCard;

{
    /*
<Card
      cover={
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        <Link to={`/admin/product/${slug}`}>
          <EditOutlined className="text-warning" />
        </Link>,
        <DeleteOutlined
          onClick={() => handleRemove(slug)}
          className="text-danger"
        />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
*/
}
