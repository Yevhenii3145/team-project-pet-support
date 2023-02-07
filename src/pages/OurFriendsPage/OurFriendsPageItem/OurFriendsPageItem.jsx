import { useState } from 'react';
// import { useState, useEffect } from 'react';
import EllipsisText from 'react-ellipsis-text';
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
    // const [skrin, setSkrin] = useState(
    //     window.matchMedia('(min-width: 768px)').skrin
    // );
    // useEffect(() => {
    //     window
    //         .matchMedia('(min-width: 768px)')
    //         .addEventListener('change', e => setSkrin(e.skrin));
    // }, [skrin, setSkrin]);

    const closeModal = () => {
        if (popupActive) {
            setPopupActive(false);
        }
    };

    const normalEmail = email !== '-------------------------';
    const normalAddress = address !== '-------------------------';
    const normalPhone = phone !== '--------------------------';
    const phoneLink = `tel:${phone}`;
    const normalFoto = foto !== null;

    return (
        <li className={scss.card_item} onClick={closeModal}>
            <h2>{title} </h2>
            <div className={scss.wrapper}>
                <div className={scss.space}>
                    {normalFoto && (
                        <img
                            className={scss.item_image}
                            src={foto}
                            alt={`foto of ${title}`}
                        />
                    )}
                    {!normalFoto && (<div className={scss.plug}></div>)}
                </div>
                <div className={scss.content_wraper}>
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
                        <a href={addressUrl} className={scss.underline}><EllipsisText text={address} tooltip={address} length={Number(`20`)} />
                        </a>
                    )}
                    {!normalAddress && <span>{address}</span>}

                    <p className={scss.mar}>Email:</p>
                    {normalEmail && <a href={`mailto: ${email}`}><EllipsisText text={email} tooltip={email} length={Number(`20`)} /></a>}
                    {!normalEmail && <span>{email}</span>}

                    <p className={scss.mar}>Phone:</p>
                    {normalPhone && <a href={phoneLink}>{phone}</a>}
                    {!normalPhone && <span>{phone}</span>}
                </div>
            </div>
        </li>
    );
};

export default OurFriendsPageItem;
