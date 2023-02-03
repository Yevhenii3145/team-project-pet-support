import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4001/api'
})

export const getCategoryPets = async (categoryname) => {
    const data = await instance.get(`/notices/${categoryname}`);
    return data;
}