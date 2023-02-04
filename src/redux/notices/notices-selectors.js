export const getStore = ({notices}) => ({loading: notices.loading, error: notices.error});

export const getNotices = ({ notices }) => notices.items;