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

      const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userDate, setUserDate] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userCity, setUserCity] = useState('');

 const user = useSelector(getUser)
    console.log(user)

    const dispatch = useDispatch();

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
    console.log(userSchema)   

    
   const onSubmit = (values, { setSubmitting }) => {
        console.log(values);
        const form = values.currentTarget;
        const { name, email, date, phone, city } = form.elements;
        setUserName(name.value);
        setUserEmail(email.value);
        setUserDate(date.value);
        setUserPhone(phone.value);
       setUserCity(city.value);
       const data = new FormData();
       data.append('name', userName);
       data.append('email', userEmail);
       data.append('date', userDate);
       data.append('phone', userPhone);
       data.append('city', userCity);
       (dispatch(operations.fetchUserData(data)));


    }
  
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true, isId:"icon-edit",};
//     // Эта привязка обязательна для работы `this` в колбэке.s
//       this.handleClick = this.handleClick.bind(this);
      
//   }

//   handleClick() {
//     this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn,
//         isId:'icon-done',
//     }));
      
//     }
//     render() {
       
//      const id = this.state.isId;

       
//     return (
//         <button onClick={this.handleClick} className={scss.iconEdit_btn} >
//             {!this.state.isToggleOn  ? <SvgInsert id={`${id}`}/> : <SvgInsert id='icon-edit-active'/> }
//       </button>
               
//     );
//   }
// }
          

    return (
                     <Formik
                initialValues={{userSchema}}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                        <Form className={scss.userDataForm_box} onSubmit={onSubmit} >
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}> Name:</label>
                                <Field type="name" name="name" placeholder={user.name} className={scss.userDataForm_field} />
                                <ErrorMessage name="name" component="div" />
                                <button onClick={this.handleClick} className={scss.iconEdit_btn} ><SvgInsert id='icon-edit-active'/></button>
                            </div>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}> Email:</label>
                                <Field type="email" name="email" placeholder={user.email}  className={scss.userDataForm_field} />
                                <ErrorMessage name="Email" component="div" />
                                <button onClick={this.handleClick} className={scss.iconEdit_btn} ><SvgInsert id='icon-edit-active'/></button>
                            </div>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}>Birthday:</label>
                        <Field type="data" name="data" placeholder={user.date}  className={scss.userDataForm_field} />
                                <ErrorMessage name="data" component="div" />
                                <button onClick={this.handleClick} className={scss.iconEdit_btn} ><SvgInsert id='icon-edit-active'/></button>
                            </div>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}>Phone:</label>
                                <Field type="tel" name="phone" placeholder={user.phone} className={scss.userDataForm_field} />
                                <ErrorMessage name="phone" component="div" />
                                <button onClick={this.handleClick} className={scss.iconEdit_btn} ><SvgInsert id='icon-edit-active'/></button>
                            </div>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}>City:</label>
                                <Field type="text" name="name" placeholder={user.city} className={scss.userDataForm_field} />
                                <ErrorMessage name="City" component="div" />
                                <button onClick={this.handleClick} className={scss.iconEdit_btn} ><SvgInsert id='icon-edit-active'/></button>
                            </div>
                        </Form>
                )}
        </Formik>
    )

}