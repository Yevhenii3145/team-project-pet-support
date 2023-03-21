import scss from './user-data-item.module.scss';
import SvgInsert from '../../utilsFolder/Svg/Svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import operations from 'redux/operations/userOperations';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';


const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;

export default function UserAvatar() {
  const userInStore = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const usertoken = searchParams.get('token');

  const current = usertoken ? usertoken : token;

  const defaultImg =
    'https://dummyimage.com/150x150/FDF7F2.gif&text=Add+your+photo!';

  const handleImageChange = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file?.size > 5242880) {
      Notify.warning('File is too big, please download max 5 mb!', {
        timeout: 5000,
        distance: '100px',
        opacity: '0.8',
        useIcon: false,
        fontSize: '18px',
        borderRadius: '20px',
        showOnlyTheLastOne: true
      });
      
      return;
    }
      
        setLoading(true);
        console.log("loading null", loading)
        
        setTimeout(() => {
                  reader.onloadend = () => {
            dispatch(operations.updateUserAvatar(file));
            setLoading(false)
            console.log("loading", loading)
    };
 
        if (current !== undefined) {

      reader.readAsDataURL(file);

        } else {
      reader.readAsDataURL(file);
    }
        }, 1000)
    // return;
  };

  return (
  <>
                    {loading &&
                // <div className={scss.loader__content_avatar}>
        <div className={scss.loader_oval_avatar}>
          <Oval
            height={60}
            width={60}
            color="#F59256"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#F59256"
            strokeWidth={2}
            strokeWidthSecondary={2}
           />
                    {/* </div> */}
                </div>}

        <div className={scss.userItem_box_yourPhoto}>
          <img className={scss.userItem__yourPhoto} src={userInStore.avatar ? userInStore.avatar : defaultImg} alt="" />
            <div className={scss.userItem_box_btnPhoto}>    
                <input
                    className={scss.userItem_input_edit_photo}
                    type="file"
                    name="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    id="file"
                    onChange={handleImageChange}
                />
                <label htmlFor="file" className={scss.userItem_edit_photo}>
                    <SvgInsert id="icon-edit-avatar" />
                    Edit photo
                </label>
            </div>
      </div>
      </>
  );
}
