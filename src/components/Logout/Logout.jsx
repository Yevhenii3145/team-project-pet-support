import scss from "./logout.module.scss";
import React from 'react';
import { useDispatch } from 'react-redux';
// import { logout } from '../../../redux/auth/auth-operations'
import operations from '../../redux/operations';
import SvgInsert from "components/Svg/Svg";

export default function Logout() {
    const dispatch = useDispatch()
  

    const onLogout = () => {
        dispatch(operations.logout())
    }

    return (
            <button className={scss.logout_button} onClick={onLogout}>
                <SvgInsert className={scss.logout} id="icon-logout"/>
                <p className={scss.logout_text}>Logout</p>
            </button>
    )
}