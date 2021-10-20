import axios from 'axios';

export const createStore = async (authtoken, name, description, user) =>
    await axios.post(
        `${process.env.REACT_APP_API}/Createstore`,
        { name, description, user },
        {
            headers: {
                authtoken,
            },
        }
    );
export const getStore = async (id) =>
    await axios.get(`${process.env.REACT_APP_API}/store/${id}`);
