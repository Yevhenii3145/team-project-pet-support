import scss from "./logout.module.scss";
import SvgInsert from "../../utilsFolder/Svg/Svg";
import React from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/operations/userOperations';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export default function Logout() {
    const dispatch = useDispatch()
  

    const onLogout = () => {
        Confirm.show(
      '',
      'Are you sure you want to delete your account?',
      'Yes',
      'No',
                () => {
                dispatch(operations.logout())
            },
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




    //     dispatch(operations.logout())
    // }

    return (
        <div className={scss.logout_box}>
            <button className={scss.logout_button} onClick={onLogout}>
                <SvgInsert id="icon-logout"/>
                <p className={scss.logout_text}>Logout</p>
            </button>
        </div>

    )
}