import scss from './our-friends-page-item-popup.module.scss';

const OurFriendsPageItemPopup = ({ active, setActive, workDays, day }) => {
    const arrayOfDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    return (
        <div
            className={active ? `${scss.popup} ${scss.activ}` : `${scss.popup}`}
            onClick={() => setActive(!active)}
        >
            <div className={scss.popup_content} onClick={e => e.stopPropagation()}>
                {arrayOfDays.map((el, i) => (
                    <p key={i} className={day === i ? scss.targetDay : ''}>
                        {el} {workDays?.[i].from}-{workDays?.[i].to}
                    </p>
                ))}
            </div>
        </div>
    );
};
export default OurFriendsPageItemPopup;
