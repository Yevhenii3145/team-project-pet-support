import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const instance = axios.create({
    baseURL: `${REACT_APP_BASE_URL}/api`
    // baseURL: `https://backend3-team-project-pet-support.onrender.com/api`
})

export const getCategoryNotices = async (categoryName) => {
    const data = await instance.get(`/notices/${categoryName}`);
    return data;
}

export const addNoticeToFavorite = async (noticeId) => {
    const data = await instance.patch(`/notices/favorites/${noticeId}`);
    return data;
}

export const deleteNotice = async (noticeId) => {
    const data = await instance.delete(`/notices/${noticeId}`);
    return data;
}