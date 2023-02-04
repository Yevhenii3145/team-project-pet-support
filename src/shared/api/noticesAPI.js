import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4001/api'
})

// export const getPets = async () => {
//     const data = await instance.get("/notices/sell");
//     return data;
// }

export const getCategoryNotices = async (categoryName) => {
    const data = await instance.get(`/notices/${categoryName}`);
    return data;
}