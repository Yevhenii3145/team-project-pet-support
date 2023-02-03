
import scss from "./user-data-item.module.scss";
import { UserFormik } from "./UserFormik";
import SvgInsert from "../Svg/Svg";
import axios from 'axios';
import { useState } from 'react';
import { RiSave3Fill } from 'react-icons/ri';


export default function UserDataItem() {

    const [avatar, setAvatar] = useState({});
    const [imagePreviewUrl, setImagePreviewUrl] = useState('https://dummyimage.com/150x150/FDF7F2.gif&text=You+photo!');
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
    console.log(e.target.files[0]);
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setAvatar(file);
      setImagePreviewUrl(reader.result);
      setEditPhoto(true);
    };
    reader.readAsDataURL(file);
  };
    
    
    //    const handelSabmit = (event) => {
    //        event.preventDefault();
    //        const { UserPhoto } = this.elements;
    //        console.log(UserPhoto.value);
    //        const data = new FormData();
    //        data.append("UserPhoto", UserPhoto.files[0]);

    // }
    
    // const onClick = () => {
    //     console.log('sdfgh');
        
    //     }
    
    return (
        <div className={scss.userItem_container}>
            <div className={scss.userItem_box_yourPhoto}>
                <img className={scss.userItem__yourPhoto} src={imagePreviewUrl} alt="" />
                <div className={scss.userItem_box_btnPhoto}>
                {!editPhoto && (
                <>
                    <input
                    className={scss.userItem_input_edit_photo}
                    type="file"
                    name="file"
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
                <UserFormik/>
            {/* </div> */}
                    
        </div>
    )}


