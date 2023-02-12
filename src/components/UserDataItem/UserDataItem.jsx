import scss from './user-data-item.module.scss';
import { UserFormik } from './UserFormik';
import SvgInsert from '../Svg/Svg';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import operations from 'redux/operations';
import axios from 'axios';
// import useAuth from 'shared/hooks/useAuth';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;



export default function UserDataItem() {
  
   const userInStore = useSelector(state => state.auth.user);
  const [userAvatar, setUserAvatar] = useState();
  // const isLogin = useAuth();

  const dispatch = useDispatch();
  const defaultImg =
    'https://dummyimage.com/150x150/FDF7F2.gif&text=Add+your+photo!';
  const [avatarURL, setAvatar] = useState();
  const [imagePreviewUrl, setImagePreviewUrl] = useState(userInStore.avatarURL ? userInStore.avatarURL :defaultImg);
  const [user, setUser] = useState({});
 

  useEffect(() => {
    const avatar = userInStore.avatarURL;
    if (userInStore.token !== undefined) {
      fetch(`${REACT_APP_BASE_URL}/api/users/current`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userInStore.token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setUser(data);
          setUserAvatar(avatar);
       
        })
        .catch(error => console.log(error));
      return;
    } else {
      setUser(userInStore);
      setUserAvatar(userInStore.avatarURL);
      console.log(avatarURL)
      
    }
  }, []);

console.log(user.avatarURL)
  

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
      // window.localStorage.setItem(file);
      
      
    };
    if (userInStore.token !== undefined) {
     
       reader.readAsDataURL(file)
       window.localStorage.setItem('avatar', imagePreviewUrl);
      
      
      
    } else {
      localStorage.removeItem('avatar')
      reader.readAsDataURL(file)
      window.localStorage.setItem('avatar', imagePreviewUrl);
      dispatch(operations.updateUserAvatar(file));
      
    } 
    return;
  };

  let av= window.localStorage.getItem('avatar');
  
  console.log('av', av)
 
// var returnObj = JSON.parse(localStorage.getItem("myKey"))

  console.log('imagePreviewUrl', imagePreviewUrl)

  return (
    <div className={scss.userItem_container}>
      <div className={scss.userItem_box_yourPhoto}>
        {userInStore.token === undefined
          && (<img
          className={scss.userItem__yourPhoto}
            src={imagePreviewUrl}
          alt=""
          />)
        }
        {userInStore.token !== undefined
          && (<img
          className={scss.userItem__yourPhoto}
            src={av}
          alt=""
          />)
          }
      
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


