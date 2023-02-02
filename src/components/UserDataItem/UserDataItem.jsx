
import scss from "./user-data-item.module.scss";
import { UserFormik } from "./UserFormik";
import SvgInsert from "../Svg/Svg";


export default function UserDataItem() {

    
    
       const handelSabmit = (event) => {
           event.preventDefault();
           const { UserPhoto } = this.elements;
           console.log(UserPhoto.value);
           const data = new FormData();
           data.append("UserPhoto", UserPhoto.files[0]);

    }
    
    const onClick = () => {
        console.log('sdfgh');
        
        }
    
    return (
        <div className={scss.userItem_container}>
            <img className={scss.userItem__yourPhoto} src="https://dummyimage.com/150x150/FDF7F2.gif&text=You+photo!" alt="" />
            <div className={scss.userItem_box_btnPhoto}>
                {/* <form onSubmit={handelSabmit} style={{ opacity: '1' }} enctype="multipart/form-data">
                    <div>
                        <input type="file" name="UserPhoto"/>
                    </div> */}
                    <button className={scss.userItem_button} type='button'><SvgInsert id='icon-edit-avatar' />Edit photo</button>
                {/* </form> */}
            </div>
            <div className={scss.userItem_box_text}>
            <UserFormik/>
    </div>
    
</div>
    )}


