import scss from "./user-data-item.module.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SvgInsert from "../Svg/Svg";
// import style from "../Svg/svg.module.scss"
import { useState } from 'react';
import React from 'react';
import { getUser } from "../../redux/selectors"
import { useSelector} from "react-redux";
import {  useEffect, useDispatch } from 'react';
import operations from "redux/operations";

;
// import {useEffect} from "react";



export function UserFormik() {

    //   const [userName, setUserName] = useState('');
    // const [userEmail, setUserEmail] = useState('');
    // const [userDate, setUserDate] = useState('');
    // const [userPhone, setUserPhone] = useState('');
    // const [userCity, setUserCity] = useState('');

 const user = useSelector(getUser)
    console.log(user.name)

    // const dispatch = useDispatch();

    // useEffect(()=> {
    //     dispatch(operations.fetchUserData())
    // }, [dispatch])

    const userSchema = {
        name: user.name,
        email: user.email,
        date: user.date,
        phone: user.phone,
        city: user.city,

    }
//     const onClick = (values) => {
//         const form = values.currentTarget;
//         const { name, email, date, phone, city } = form.elements;
//         setUserName(name.value);
//         setUserEmail(email.value);
//         setUserDate(date.value);
//         setUserPhone(phone.value);
//        setUserCity(city.value);
//        const data = new FormData();
//        data.append('name', userName);
//        data.append('email', userEmail);
//        data.append('date', userDate);
//        data.append('phone', userPhone);
//        data.append('city', userCity);
//        console.log(userName) 
// }

    // const onClick = () => {
    //     console.log(user.city)
    // }
        
    
    const onSubmit = (values, { setSubmitting }) => {
         const form = values.currentTarget;
        const { name} = form.elements;
        // setUserName(name.value);
        console.log(values)
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);

    }
  

    const [active, setActive] = useState("");

    const changeIcon = (name) => {
        if(active === name) {
            return setActive("")
        }
        setActive(name)
    }

    const toggleIcon = (name) => {
        console.log(active);
        console.log(name);
        if(active === name) {
            return (<SvgInsert id="icon-done"/>)
        } else {
            return (<SvgInsert id="icon-edit-active"/>)
        }
    }
   

    return (
                     <Formik
                initialValues={{userSchema}}
                onSubmit={onSubmit} 
                >
                {({ isSubmitting }) => (
                <Form className={scss.userDataForm_box} >
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>Name:</label>
                            {/* <Field type="name" name="name" placeholder={`${auth.name}`} className={scss.userDataForm_field}/> */}
                            {active && active === "name" ? <Field type="name" name="name" placeholder="Name" className={scss.userDataForm_field}/> : <Field type="name" name="name" placeholder="Name" disabled className={scss.userDataForm_field}/>}
                            <ErrorMessage name="name" component="div" />
                            <button className={scss.iconEdit_btn} onClick={()=>changeIcon("name")}>
                                {active ? toggleIcon("name") : <SvgInsert id='icon-edit'/>}
                            </button> 
                        </div>
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>Email:</label>
                            {/* <Field type="email" name="email" placeholder={`${auth.email}`} className={scss.userDataForm_field}/> */}
                            {active && active === "email" ? <Field type="email" name="email" placeholder="Email"  className={scss.userDataForm_field}/> : <Field type="email" name="email" placeholder="Email" disabled className={scss.userDataForm_field}/>}
                            <ErrorMessage name="Email" component="div" />
                            <button className={scss.iconEdit_btn} onClick={()=>changeIcon("email")}>
                                {active ? toggleIcon("email") : <SvgInsert id='icon-edit'/>}
                            </button>
                        </div>
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>Birthday:</label>
                            {active && active === "data" ? <Field type="data" name="data" placeholder="Birthday" className={scss.userDataForm_field} /> : <Field type="data" name="data" placeholder="Birthday" disabled className={scss.userDataForm_field} />}
                            {/* <Field type="data" name="data" placeholder={`${auth.birthday}`} className={scss.userDataForm_field}/> */}
                            <ErrorMessage name="data" component="div" />
                            <button className={scss.iconEdit_btn} onClick={()=>changeIcon("data")}>
                                {active ? toggleIcon("data") : <SvgInsert id='icon-edit'/>}
                            </button>         
                        </div>
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>Phone:</label>
                            {/* <Field type="tel" name="phone" placeholder={`${auth.phone}`} className={scss.userDataForm_field}/> */}
                            {active && active === "phone" ? <Field type="tel" name="phone" placeholder="Phone" className={scss.userDataForm_field}/> : <Field type="tel" name="phone" placeholder="Phone" disabled className={scss.userDataForm_field}/>}
                            <ErrorMessage name="phone" component="div" />
                            <button className={scss.iconEdit_btn} onClick={()=>changeIcon("phone")}>
                                {active ? toggleIcon("phone") : <SvgInsert id='icon-edit'/>}
                            </button>
                        </div>
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>City:</label>
                            {/* <Field type="text" name="name" placeholder={`${auth.city}`} className={scss.userDataForm_field}/> */}
                            {active && active === "city" ? <Field type="text" name="city" placeholder="City" className={scss.userDataForm_field}/> : <Field type="text" name="city" placeholder="City" disabled className={scss.userDataForm_field}/>}
                            <ErrorMessage name="City" component="div" />
                            <button className={scss.iconEdit_btn} onClick={()=>changeIcon("city")}>
                                {active ? toggleIcon("city") : <SvgInsert id='icon-edit'/>}
                            </button>          
                        </div>

            </Form>   
                )}
        </Formik>
    )

}