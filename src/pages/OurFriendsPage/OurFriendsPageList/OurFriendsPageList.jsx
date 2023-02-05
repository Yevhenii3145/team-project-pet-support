import OurFriendsPageItem from '../OurFriendsPageItem/OurFriendsPageItem';
import scss from './our-friends-page-list.module.scss';
import { DateTime } from 'luxon';

const OurFriendsPageList = ({ items }) => {
    var dt = DateTime.local();
    let weekday = dt.weekday;
    let targetDay = weekday - 1;

    return (
        <ul className={scss.card_list}>
            {items.map(item => (
                <OurFriendsPageItem
                    key={item.title}
                    title={item.title}
                    start={item.workDays?.[targetDay].from || '------------'}
                    end={item.workDays?.[targetDay].to || '-------------'}
                    address={item.address || '-------------------------'}
                    addressUrl={item.addressUrl}
                    email={item.email || '-------------------------'}
                    phone={item.phone || '--------------------------'}
                    foto={item.imageUrl}
                    workDays={item.workDays}
                    day={targetDay}
                ></OurFriendsPageItem>
            ))}
        </ul>
    );
};

export default OurFriendsPageList;
