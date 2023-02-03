import scss from './our-friends-page-item-popup.module.scss';

const OurFriendsPageItemPopup = ({ active, setActive, workDays }) => {
    return (

        <div
            className={active ? `${scss.popup} ${scss.activ}` : `${scss.popup}`}
            onClick={() => setActive(!active)}
        >
            <div className={scss.popup_content}>
                <p>MN   {workDays?.[0].from} -{workDays?.[0].to}</p>
                <p>MN   {workDays?.[1].from} -{workDays?.[1].to}</p>
                <p>MN   {workDays?.[2].from} -{workDays?.[2].to}</p>
                <p>MN   {workDays?.[3].from} -{workDays?.[3].to}</p>
                <p>MN   {workDays?.[4].from} -{workDays?.[4].to}</p>
                <p>MN   {workDays?.[5].from} -{workDays?.[5].to}</p>
                <p>MN   {workDays?.[6].from} -{workDays?.[6].to}</p>
            </div>


            {/* {workDays?.forEach(workDay => (<p>MN  {workDays?.from}-{workDays?.to}</p>))} */}

        </div>
    );
};
export default OurFriendsPageItemPopup;
