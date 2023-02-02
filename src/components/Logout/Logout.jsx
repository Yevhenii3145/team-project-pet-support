import scss from "./logout.module.scss";
import React from 'react';
import { useDispatch } from 'react-redux';
// import { logout } from '../../../redux/auth/auth-operations'
import operations from '../../redux/operations';

export default function Logout() {
    const dispatch = useDispatch()
  

    const onLogout = () => {
        dispatch(operations.logout())
    }



    return (
        <button onClick={onLogout}>Logout</button>

    )
}