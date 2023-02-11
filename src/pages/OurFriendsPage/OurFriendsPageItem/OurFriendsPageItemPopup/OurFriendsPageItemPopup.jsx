import scss from './our-friends-page-item-popup.module.scss';

const OurFriendsPageItemPopup = ({ active, setActive, workDays, day }) => {
  const arrayOfDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  return (
    <div
      className={active ? `${scss.popup} ${scss.activ}` : `${scss.popup}`}
      onClick={() => setActive(!active)}
    >
      <ul className={scss.popup_content} onClick={e => e.stopPropagation()}>
        {arrayOfDays.map((el, i) => (
          <li
            key={i}
            className={
              day === i ? `${scss.targetDay} ${scss.day_item}` : scss.day_item
            }
          >
            <div className={scss.day_wrap}>
              <div className={scss.day_date}>{el}</div>
              <div className={scss.day_time}>
                {workDays?.[i].from}-{workDays?.[i].to}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default OurFriendsPageItemPopup;
