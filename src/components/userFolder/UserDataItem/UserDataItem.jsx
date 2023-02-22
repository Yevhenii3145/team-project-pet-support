import scss from './user-data-item.module.scss';
import { UserFormik } from './UserFormik';
import SvgInsert from '../../utilsFolder/Svg/Svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import operations from 'redux/operations/userOperations';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;

export default function UserDataItem() {
  const userInStore = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();
  const defaultImg =
    'https://dummyimage.com/150x150/FDF7F2.gif&text=Add+your+photo!';

  const handleImageChange = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file?.size > 5242880) {
      Notify.warning('File is too big, please download max 5 mb!', {
        timeout: 5000,
      });

      return;
    }
    reader.onloadend = () => {
      dispatch(operations.updateUserAvatar(file));
    };
    if (token !== undefined) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsDataURL(file);
    }
    return;
  };

  return (
    <div className={scss.userItem_container}>
      <div className={scss.userItem_box_yourPhoto}>
        <img className={scss.userItem__yourPhoto} src={userInStore.avatar ? userInStore.avatar : defaultImg} alt="" />

        <div className={scss.userItem_box_btnPhoto}>
          <>
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
          </>
        </div>
      </div>

      <UserFormik />
    </div>
  );
}
