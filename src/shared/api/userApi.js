import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;



export const deleteUserPet = async (petId) => {
    const data = await axios.delete(`/users/${petId}`);
     console.log("data", data);
    return data;
}
