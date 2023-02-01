import scss from "./logout.module.scss";
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/auth/auth-operations'

export default function Logout() {
    const dispatch = useDispatch()
  

    const onLogout = () => {
        dispatch(logout())
    }


    return (
        <button onClick={onLogout}>Logout</button>
    )
}