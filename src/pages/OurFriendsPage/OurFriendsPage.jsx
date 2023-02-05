import OurFriendsPageTitle from './OurFriendsPageTitle/OurFriendsPageTitle';
import OurFriendsPageList from './OurFriendsPageList/OurFriendsPageList';
import items from './sponsors.json';
import scss from './our-friends-page.module.scss';

// Проптайпс

const OurFriendsPage = () => {
    return (
        <div className={scss.container}>
            <OurFriendsPageTitle title={'Our friends'} />
            <OurFriendsPageList items={items} />
        </div>
    );
};

export default OurFriendsPage;
