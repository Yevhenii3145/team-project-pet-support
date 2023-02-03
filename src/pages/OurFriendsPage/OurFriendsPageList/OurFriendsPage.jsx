import OurFriendsPageItem from '../OurFriendsPageItem/OurFriendsPageItem';
import scss from './our-friends-page.module.scss';

const OurFriendsPageList = ({ items }) => {
    return (
        <ul className={scss.card_list}>
            {items.map(item => (
                <OurFriendsPageItem
                    key={item.title}
                    title={item.title}
                    start={item.workDays?.[1].from || '------------'}
                    end={item.workDays?.[1].to || '-------------'}
                    adress={item.adress || '-------------------------'}
                    email={item.email || '-------------------------'}
                    phone={item.phone || '--------------------------'}
                    foto={item.imageUrl}
                    workDays={item.workDays}
                ></OurFriendsPageItem>
            ))}
        </ul>
    );
};

export default OurFriendsPageList;
