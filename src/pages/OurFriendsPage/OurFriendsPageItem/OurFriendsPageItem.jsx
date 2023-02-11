import { useState } from 'react';
// import { useState, useEffect } from 'react';
import EllipsisText from 'react-ellipsis-text';
import scss from './our-friends-page-item.module.scss';
import OurFriendsPageItemPopup from './OurFriendsPageItemPopup/OurFriendsPageItemPopup';
import defaultImg from '../../../images/default_logo_friends.jpg';

const OurFriendsPageItem = ({
  title,
  url,
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
      <a
        href={url}
        className={scss.card_title}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      <div className={scss.wrapper}>
        <div className={scss.space}>
          {normalFoto && (
            <img
              className={scss.item_image}
              src={foto}
              alt={`foto of ${title}`}
            />
          )}
          {!normalFoto && (
            <img
              className={scss.item_image}
              src={defaultImg}
              alt={`foto of ${title}`}
            />
          )}
        </div>
        <div className={scss.content_wraper}>
          <div
            className={scss.orient_popup}
            onClick={() => {
              setPopupActive(!popupActive);
            }}
          >
            <p>
              Time: <br />
              <span
                onClick={() => {
                  setPopupActive(!popupActive);
                }}
              >
                {start}-{end}
              </span>
            </p>
            <OurFriendsPageItemPopup
              active={popupActive}
              setActive={setPopupActive}
              workDays={workDays}
              day={day}
            />
          </div>

          <p>
            Address: <br />
            {normalAddress && (
              <a
                href={addressUrl}
                className={scss.underline}
                target="_blank"
                rel="noreferrer"
              >
                <EllipsisText
                  text={address}
                  tooltip={address}
                  length={Number(`25`)}
                />
              </a>
            )}
            {!normalAddress && <span>{address}</span>}
          </p>

          <p className={scss.mar}>
            Email: <br />
            {normalEmail && (
              <a href={`mailto: ${email}`}>
                <EllipsisText
                  text={email}
                  tooltip={email}
                  length={Number('25')}
                />
              </a>
            )}
            {!normalEmail && <span>{email}</span>}
          </p>

          <p className={scss.mar}>
            Phone:
            <br />
            {normalPhone && <a href={phoneLink}>{phone}</a>}
            {!normalPhone && <span>{phone}</span>}
          </p>
        </div>
      </div>
    </li>
  );
};

export default OurFriendsPageItem;
