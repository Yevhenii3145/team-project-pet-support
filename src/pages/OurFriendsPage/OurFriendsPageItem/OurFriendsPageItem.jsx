import { click } from '@testing-library/user-event/dist/click';
import { useState, useEffect } from 'react';
import scss from './our-friends-page-item.module.scss';
import OurFriendsPageItemPopup from './OurFriendsPageItemPopup/OurFriendsPageItemPopup';

const OurFriendsPageItem = ({
    title,
    start,
    end,
    adress,
    email,
    phone,
    foto,
    workDays
}) => {
    const [popupActive, setPopupActive] = useState(false);

    // useEffect(() => {
    //     document.addEventListener('keydown', function (event) {
    //         if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    //             setPopupActive(!popupActive)
    //         }
    //     });
    // }, [popupActive]);

    useEffect(() => {
        console.log("ttttttttttttttt", workDays)
    }, [popupActive, workDays]);


    return (
        <li className={scss.card_item}>
            <h2>{title}</h2>
            <div className={scss.wrapper}>
                <div className={scss.plug}>
                    {foto && (
                        <img
                            className={scss.item_image}
                            src={foto}
                            alt={`foto of ${title}`}
                        />
                    )}
                </div>
                <div>
                    <div
                        className={scss.orient_popup}
                        onClick={() => {
                            setPopupActive(!popupActive);
                        }}
                    >
                        <p>Time:</p>
                        <OurFriendsPageItemPopup
                            active={popupActive}
                            setActive={setPopupActive}
                            workDays={workDays}
                        />
                    </div>
                    <span>
                        {start}-{end}
                    </span>
                    <p>Address:</p>
                    <span className={scss.underline}>{adress}</span>

                    {/* <span (if ({adress} !== '-------------------------')) {(className={scss.underline}))>{adress}</span> */}
                    <p>Email:</p>
                    {/* {({ email } === 1) ? (<span>uuuu</span>) : (<a href={`mailto: ${email}`}>{email}</a>)} */}
                    {/* if ({email} !== ('-------------------------')) {
                        (<a href={`mailto: ${email}`}>{email}</a>)
                    }else {
                        (<span>uuuu</span>)
                    } */}
                    <a href={`mailto: ${email}`}>{email}</a>
                    <p>Phone:</p>
                    <span>{phone}</span>
                </div>
            </div>
        </li>
    );
};

export default OurFriendsPageItem;
