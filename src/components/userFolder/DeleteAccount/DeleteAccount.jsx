import scss from "./delete-account.module.scss";
import SvgInsert from "../../utilsFolder/Svg/Svg";
import React from 'react';
// import { useDispatch } from 'react-redux';
// import operations from '../../redux/operations';


export default function DeleteAccount() {
    // const dispatch = useDispatch()
  

    // const DeleteAccount = () => {
    //     dispatch(operations.deleteAccount())
    // }

    return (
        <div className={scss.delete_account_box}>
            <button className={scss.delete_account_button}>
                <p className={scss.delete_account_text}>Delete account</p>
                <SvgInsert className={scss.delete_icon} id="icon-delete" />
            </button>
        </div>

    )
}