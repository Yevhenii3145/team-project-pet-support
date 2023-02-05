import { useState } from 'react';
import scss from './our-friends-page-item.module.scss';
import OurFriendsPageItemPopup from './OurFriendsPageItemPopup/OurFriendsPageItemPopup';

const OurFriendsPageItem = ({
    title,
    start,
    end,
    address,
    addressUrl,
    email,
    phone,
    foto,
    workDays,
    day,
}) => {
    const [popupActive, setPopupActive] = useState(false);

    const closeModal = () => {
        if (popupActive) {
            setPopupActive(false);
        }
    };

    const normalEmail = email !== '-------------------------';
    const normalAddress = address !== '-------------------------';
    const normalPhone = phone !== '--------------------------';
    const phoneLink = `tel:${phone}`;

    return (
        <li className={scss.card_item} onClick={closeModal}>
            <h2>{title} </h2>
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
                            day={day}
                        />
                    </div>
                    <span
                        onClick={() => {
                            setPopupActive(!popupActive);
                        }}
                    >
                        {start}-{end}
                    </span>
                    <p>Address:</p>
                    {normalAddress && (
                        <a href={addressUrl} className={scss.underline}>
                            {address}
                        </a>
                    )}
                    {!normalAddress && <span>{address}</span>}
                    <p>Email:</p>
                    {normalEmail && <a href={`mailto: ${email}`}>{email}</a>}
                    {!normalEmail && <span>{email}</span>}

                    <p>Phone:</p>
                    {normalPhone && <a href={phoneLink}>{phone}</a>}
                    {!normalPhone && <span>{phone}</span>}
                </div>
            </div>
        </li>
    );
};

export default OurFriendsPageItem;
