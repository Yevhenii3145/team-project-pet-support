import scss from "./delete-account.module.scss";
import SvgInsert from "../../utilsFolder/Svg/Svg";
import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`

export default function DeleteAccount() {

    const token = useSelector(state => state.auth.token)
    console.log('token', token);
    
    const handlDeleteAccount = () => {
        fetch(`${REACT_APP_BASE_URL}/api/users/current`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                localStorage.clear();
                    window.location.replace('http://localhost:3000/register');
            })
            .catch(() => {
                console.error('Failed to delete account.');
            })
    };

    return (
       <div className={scss.delete_account_box}>
            <button className={scss.delete_account_button} onClick={handlDeleteAccount}>
                <p className={scss.delete_account_text}>Delete account</p>
                <SvgInsert id="icon-delete" />
            </button>
        </div>

    )
}

