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

  const closeModal = () => {
    if (popupActive) {
      setPopupActive(false);
    }
  };

  const normalTime = start !== '------------';
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
              normalTime
                ? setPopupActive(!popupActive)
                : setPopupActive(popupActive);
            }}
          >
            <p>
              Time: <br />
              <span
                className={normalTime ? '' : scss.empty_data}
                onClick={() => {
                  normalTime
                    ? setPopupActive(!popupActive)
                    : setPopupActive(popupActive);
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
            {!normalAddress && (
              <span className={scss.empty_data}>{address}</span>
            )}
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
            {!normalEmail && <span className={scss.empty_data}>{email}</span>}
          </p>

          <p className={scss.mar}>
            Phone:
            <br />
            {normalPhone && <a href={phoneLink}>{phone}</a>}
            {!normalPhone && <span className={scss.empty_data}>{phone}</span>}
          </p>
        </div>
      </div>
    </li>
  );
};

export default OurFriendsPageItem;
