import scss from './user-data-item.module.scss';
import { UserFormik } from './UserFormik';
import SvgInsert from '../Svg/Svg';
import axios from 'axios';
import { useState } from 'react';
import { RiSave3Fill } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function UserDataItem() {
  const defaultImg =
    'https://dummyimage.com/150x150/FDF7F2.gif&text=Add+your+photo!';
  const [avatar, setAvatar] = useState({});
  const [imagePreviewUrl, setImagePreviewUrl] = useState(defaultImg);
  const [editPhoto, setEditPhoto] = useState(false);

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(avatar);
    formData.append('file', avatar);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios
      .patch('/avatar', formData, config)
      .then(res => {
        console.log(res);
      })
      .catch(error => {});

    setEditPhoto(false);
  };

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
      setEditPhoto(true);
    };
    reader.readAsDataURL(file);
    return;
  };

  // const onClick = () => {
  //     console.log('sdfgh');

  //     }

  return (
    <div className={scss.userItem_container}>
      <div className={scss.userItem_box_yourPhoto}>
        <img
          className={scss.userItem__yourPhoto}
          src={imagePreviewUrl}
          alt=""
        />
        <div className={scss.userItem_box_btnPhoto}>
          {!editPhoto && (
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
          )}
          {editPhoto && (
            <button
              className={scss.userItem_button}
              type="submit"
              onClick={() => handleSubmit()}
            >
              <RiSave3Fill size={20} className={scss.userItem_button_icon} />
              Save edit
            </button>
          )}
        </div>
      </div>
      {/* <div className={scss.userDataForm_box}> */}
      <UserFormik />
      {/* </div> */}
    </div>
  );
}

// const elements = contacts.map(({ name, number, id }) => {
//     return <li className={css.listItem} key={id}>{name}: {number}
//         <span className={css.deleteItem} onClick={() => onDeleteContact(id)}>Delete</span></li>
// })
//     return (
//        <>
//         <ol>{elements}</ol>
//     </>
//     )
