import scss from "./user-data-item.module.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SvgInsert from "../Svg/Svg";
// import style from "../Svg/svg.module.scss"
// import { useState } from 'react';
import React from 'react';

// import { fetchUserData } from "../../redux/operations";
// import {useEffect} from "react";
// import {useDispatch } from "react-redux";


export function UserFormik() {
    // const { auth } = auth.user;

    // const dispatch = useDispatch();

    // useEffect(()=> {
    //     dispatch(fetchUserData())
    // }, [dispatch])

  
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, isId:"icon-edit"};
 console.log(this.state.isId)
    // Эта привязка обязательна для работы `this` в колбэке.
      this.handleClick = this.handleClick.bind(this);
      
  }

  handleClick() {
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        isId:'icon-done',
    }));
      
    }
    
   
    render() {
       
        const id = this.state.isId;
        console.log(id)
       
    return (
        <button onClick={this.handleClick} className={scss.iconEdit_btn} >
            {!this.state.isToggleOn  ? <SvgInsert id={`${id}`}/> : <SvgInsert id='icon-edit-active'/> }
      </button>
               
    );
  }
}
   

    return (
                     <Formik
                initialValues={{ name: "", email: "", birthday: "", phone: "", city: ""}}
                    validate={values => {
                    const errors = {};
                    if (!values.email) {
                    // errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'The email must have more than two characters';
                    }
                    if (!values.phone) {
                    // errors.phone = 'Required';
                    } else if (
                    !/^\+380\d{3}\d{2}\d{2}\d{2}$/.test(values.phone)
                    ) {
                    errors.photo = 'The email must have more than two characters';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({ isSubmitting }) => (
                
                <Form className={scss.userDataForm_box} >
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>Name:</label>
                            {/* <Field type="name" name="name" placeholder={`${auth.name}`} className={scss.userDataForm_field}/> */}
                            <Field type="name" name="name" placeholder="Name" className={scss.userDataForm_field}/>
                            <ErrorMessage name="name" component="div" />
                       <Toggle /> 
                        </div>
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>Email:</label>
                            {/* <Field type="email" name="email" placeholder={`${auth.email}`} className={scss.userDataForm_field}/> */}
                            <Field type="email" name="email" placeholder="Email"  className={scss.userDataForm_field}/>
                            <ErrorMessage name="Email" component="div" />
                            <Toggle/>
                        </div>
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>Birthday:</label>
                            <Field type="data" name="data" placeholder="Birthday" className={scss.userDataForm_field} />
                            {/* <Field type="data" name="data" placeholder={`${auth.birthday}`} className={scss.userDataForm_field}/> */}
                            <ErrorMessage name="data" component="div" />
                            <Toggle/>          
                        </div>
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>Phone:</label>
                            {/* <Field type="tel" name="phone" placeholder={`${auth.phone}`} className={scss.userDataForm_field}/> */}
                            <Field type="tel" name="phone" placeholder="Phone" className={scss.userDataForm_field}/>
                            <ErrorMessage name="phone" component="div" />
                            <Toggle/>
                        </div>
                        <div className={scss.field_box}>
                            <label className={scss.userDataForm_label}>City:</label>
                            {/* <Field type="text" name="name" placeholder={`${auth.city}`} className={scss.userDataForm_field}/> */}
                            <Field type="text" name="name" placeholder="City" className={scss.userDataForm_field}/>
                            <ErrorMessage name="City" component="div" />
                            <Toggle/>           
                        </div>

            </Form>   
                )}
        </Formik>
    )

}


// export default UserDataItem 



// ContactsItem.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     }))
// }
