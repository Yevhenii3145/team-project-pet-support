import scss from "./our-friends-page-title.module.scss";

const OurFriendsPageTitle = ({ title }) => {
    return (
        <h1 className={scss.header}>{title}</h1>
    );
};

export default OurFriendsPageTitle;