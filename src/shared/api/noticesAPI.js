import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4001/api'
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