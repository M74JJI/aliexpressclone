import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const ProductCreateForm = ({
    handleSubmit,
    handleChange,
    setValues,
    values,
    handleCatagoryChange,
    subOptions,
    showSub,
}) => {
    // destructure
    const {
        title,
        description,
        price,
        categories,
        category,
        subs,
        shipping,
        quantity,
        images,
        colors,
        sizes,
        brands,
        colorChoices,
        sizeChoices,
        specifications,
        priceBefore,
        brand,
        height,
        width,
        gender,
        style,
        modalNumber,
        material,
        recommendAge,
        use,
        origin,
        features,
        type,
        compatible,
        packaging,
        priceMAD = price * 8.948,
    } = values;
    const [open, setOpen] = useState(false);
    return (
        <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <span className="open-admin-spec" onClick={() => setOpen(!open)}>
                Open Specifications
            </span>
            <div
                className={
                    open
                        ? 'specifications-modal show-spec'
                        : 'specifications-modal'
                }
            >
                <div>
                    <label>Height</label>
                    <input
                        type="text"
                        name="height"
                        value={height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Width</label>
                    <input
                        type="text"
                        name="width"
                        value={width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gender</label>
                    <input
                        type="text"
                        name="gender"
                        value={gender}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Style</label>
                    <input
                        type="text"
                        name="style"
                        value={style}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Modal Number</label>
                    <input
                        type="text"
                        name="modalNumber"
                        value={modalNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Usage</label>
                    <input
                        type="text"
                        name="use"
                        value={use}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Origin</label>
                    <input
                        type="text"
                        name="origin"
                        value={origin}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Features</label>
                    <input
                        type="text"
                        name="features"
                        value={features}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Type</label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Compatible</label>
                    <input
                        type="text"
                        name="compatible"
                        value={compatible}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Packaging</label>
                    <input
                        type="text"
                        name="packaging"
                        value={packaging}
                        onChange={handleChange}
                    />
                </div>

                <button onClick={() => setOpen(false)}>Save</button>
            </div>
            <div className="form-group mt-3">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Price Before</label>
                <input
                    type="number"
                    name="priceBefore"
                    className="form-control"
                    value={priceBefore}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Shipping</label>
                <select
                    name="shipping"
                    className="form-control"
                    onChange={handleChange}
                >
                    <option>Please select</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>

            <div className="form-group">
                <label>Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    value={quantity}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Colors</label>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    value={colors}
                    onChange={(value) =>
                        setValues({ ...values, colors: value })
                    }
                >
                    {colorChoices.length &&
                        colorChoices.map((s, index) => (
                            <Option key={index} value={s}>
                                {s}
                            </Option>
                        ))}
                </Select>
            </div>
            <div>
                <label>Sizes</label>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    value={sizes}
                    onChange={(value) => setValues({ ...values, sizes: value })}
                >
                    {sizeChoices.length &&
                        sizeChoices.map((s, index) => (
                            <Option key={index} value={s}>
                                {s}
                            </Option>
                        ))}
                </Select>
            </div>

            <div className="form-group">
                <label>Brand</label>
                <select
                    name="brand"
                    className="form-control"
                    onChange={handleChange}
                >
                    <option>Please select</option>
                    {brands.map((b) => (
                        <option key={b} value={b}>
                            {b}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Category</label>
                <select
                    name="category"
                    className="form-control"
                    onChange={handleCatagoryChange}
                >
                    <option>Please select</option>
                    {categories.length > 0 &&
                        categories.map((c) => (
                            <option key={c._id} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>

            {showSub && (
                <div>
                    <label>Sub Categories</label>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        value={subs}
                        onChange={(value) =>
                            setValues({ ...values, subs: value })
                        }
                    >
                        {subOptions.length &&
                            subOptions.map((s) => (
                                <Option key={s._id} value={s._id}>
                                    {s.name}
                                </Option>
                            ))}
                    </Select>
                </div>
            )}

            <br />
            <button className="btn btn-outline-info">Save</button>
        </form>
    );
};

export default ProductCreateForm;
