import scss from './user-data-item.module.scss';
import { UserFormik } from './UserFormik';
import SvgInsert from '../Svg/Svg';
import axios from 'axios';
import { RiSave3Fill } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import operations from "redux/operations";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState} from 'react';
const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;

export default function UserDataItem() {
  const dispatch = useDispatch();
  // const [user, setUser] = useState({});
  // const userInStore = useSelector(state => state.auth.user);


  const user= useSelector(state => state.auth.user);
  
  const defaultImg =
    'https://dummyimage.com/150x150/FDF7F2.gif&text=Add+your+photo!';
  const [avatarURL, setAvatar] = useState({});

  const [imagePreviewUrl, setImagePreviewUrl] = useState(user.avatarURL ? user.avatarURL : defaultImg);
  const [editPhoto, setEditPhoto] = useState(false);
    

  useEffect(() => {
    dispatch(operations.current())
  }, [dispatch]);

  //   if (userInStore.token !== undefined) {
  //     fetch(`${REACT_APP_BASE_URL}/api/users/current`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${userInStore.token}`,
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         setUser(data);
  //         setAvatar(data.avatarURL);
  //         console.log('avatar', data.avatarURL)
  //       })
  //       .catch(error => console.log(error));
  //     return;
  //   } else {
  //     setUser(userInStore);
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //     setAvatar(userInStore.avatarUR);
  //     setImagePreviewUrl(reader.result);
  //     reader.readAsDataURL(userInStore.avatarUR);
  //     setEditPhoto(true);
  //   };
      
  //     console.log('avatar', userInStore.avatarURL)
  //   }
  // }, [userInStore]);
    
    
    
    
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', avatarURL);
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
    dispatch(operations.updateUserAvatar(file));
    console.log('avatar', avatarURL)

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
      <UserFormik />
    </div>
  );
}


