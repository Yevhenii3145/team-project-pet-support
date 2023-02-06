import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;

export const getCategoryNotices = async (categoryName) => {
    const data = await axios.get(`/notices/${categoryName}`);
    return data;
}

export const addNoticeToFavorite = async (noticeId) => {
    const data = await axios.patch(`/notices/favorites/${noticeId}`);
    return data;
}

export const deleteNotice = async (noticeId) => {
    const data = await axios.delete(`/notices/${noticeId}`);
    return data;
}