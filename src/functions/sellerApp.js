import axios from 'axios';

export const createSellerApp = async (
    authtoken,
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
) =>
    await axios.post(
        `${process.env.REACT_APP_API}/sellerApplication`,
        {
            user,
            name,
            gender,
            country,
            address,
            idImages,
            vatImages,
            idNum,
            companyAddress,
            businessType,
        },
        {
            headers: {
                authtoken,
            },
        }
    );
export const getAllSellerApplications = async (authtoken) =>
    await axios.get(`${process.env.REACT_APP_API}/sellerApplications`, {
        headers: {
            authtoken,
        },
    });
export const AcceptSellerApp = async (authtoken, id) =>
    await axios.put(`${process.env.REACT_APP_API}/sellerApplications/${id}`, {
        headers: {
            authtoken,
        },
    });
