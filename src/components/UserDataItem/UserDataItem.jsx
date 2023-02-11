import scss from './user-data-item.module.scss';
import { UserFormik } from './UserFormik';
import SvgInsert from '../Svg/Svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function UserDataItem() {
  const user = useSelector(state => state.auth.user);
  const defaultImg =
    'https://dummyimage.com/150x150/FDF7F2.gif&text=Add+your+photo!';
  const [avatarURL, setAvatar] = useState({});
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    user.avatarURL ? user.avatarURL : defaultImg
  );
  console.log(avatarURL);

  const handleImageChange = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file?.size > 5242880) {
      Notify.warning('File is too big, please download max 5 mb!', {
        timeout: 5000,
      });
      setImagePreviewUrl(defaultImg);
      return;
    }
    reader.onloadend = () => {
      setAvatar(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
    return;
  };

  return (
    <div className={scss.userItem_container}>
      <div className={scss.userItem_box_yourPhoto}>
        <img
          className={scss.userItem__yourPhoto}
          src={imagePreviewUrl}
          alt=""
        />
        <div className={scss.userItem_box_btnPhoto}>
          <>
            <input
              className={scss.userItem_input_edit_photo}
              type="file"
              name="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              id="file"
              onChange={e => handleImageChange(e)}
            />
            <label htmlFor="file" className={scss.userItem_edit_photo}>
              <SvgInsert id="icon-edit-avatar" />
              Edit photo
            </label>
          </>
        </div>
      </div>

      <UserFormik />
    </div>
  );
}
