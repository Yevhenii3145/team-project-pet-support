import scss from "./delete-account.module.scss";
import SvgInsert from "../../utilsFolder/Svg/Svg";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import operations from "redux/operations/userOperations";
import axios from 'axios';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const { REACT_APP_BASE_URL } = process.env
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`

export default function DeleteAccount() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token)
    
    const handlDeleteAccount = () => {
            Confirm.show(
      '',
      'Are you sure you want to delete your account?',
      'Yes',
      'No',
                () => {
                    dispatch(operations.deleteAccount(token)).then(() => {
          window.location.replace('http://localhost:3000/register');
      }) },
      () => {},
      {
        messageFontSize: '20px',
        borderRadius: '8px',
        cssAnimationStyle: 'zoom',
        okButtonColor: '#ffffff',
        okButtonBackground: '#eebb9c',
        cancelButtonColor: '#ffffff',
        cancelButtonBackground: '#F59256',
      },
    )
    };

    return (
       <div className={scss.delete_account_box}>
            <button className={scss.delete_account_button} onClick={() => handlDeleteAccount()}>
                <p className={scss.delete_account_text}>Delete account</p>
                <SvgInsert id="icon-delete" />
            </button>
        </div>

    )
}




