import scss from './auth-form.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NavLink } from "react-router-dom";

const schemasForStepFirst = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(7).max(32),
  passwordConfirm: Yup.string().required(),
});

function validatePassword(value) {
  let error;
  if (!value) {
    error = 'Password is required';
  } else if (value.includes(' ')) {
    error = 'Invalid password, must not include spaces';
  }
  return error;
}

const phoneRegExp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

const schemasForStepSecond = Yup.object().shape({
  name: Yup.string(),
  region: Yup.string().matches(
    /^[aA-zZ]+,/,
    'Is not correct format, must "City, Region"'
  ),
  number: Yup.string()
    .matches(phoneRegExp, 'Is not correct format, must +380xxxxxxxxx')
    .required()
    .min(10),
});

let user;

const AuthForm = ({page}) => {
  const [stepOne, setStepOne] = useState(true);
  const [isRegisterPage, setIsRegisterPage] = useState(false)
  const [isLoginPage, setIsLoginPage] = useState(false)

  useEffect(()=>{
    if(page === 'register'){
      setIsRegisterPage(true)
      setIsLoginPage(false)
    } else if(page === 'login'){
      setIsLoginPage(true)
      setIsRegisterPage(false)
    }
    return;
  },[])

  const initialValue = {
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    region: '',
    number: '',
  };

  const handleSubmitForRegister = (values, actions) => {
    console.log(values);
    console.log(actions);
    if (stepOne) {
      if (values.password !== values.passwordConfirm) {
        return Notify.failure('Your passwords must have the same value');
      }
      return setStepOne(false);
    }
    if (!stepOne) {
      user = values;
      console.log(user);
      actions.resetForm();
      return setStepOne(true);
    }
  };

  const backButtonClick = () => {
    if (!stepOne) {
      return setStepOne(true);
    }
  };

  return (
    <>
    {isRegisterPage && <>
        {stepOne ? (
          <Formik
            validationSchema={schemasForStepFirst}
            initialValues={initialValue}
            onSubmit={handleSubmitForRegister}
          >
            <Form className={scss.form__container} autoComplete="off">
              <Field
                className={scss.form__input}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                render={msg => Notify.warning(`${msg}`)}
              />
              <Field
                className={scss.form__input}
                type="password"
                name="password"
                placeholder="Password"
                validate={validatePassword}
              />
              <ErrorMessage
                name="password"
                render={msg => Notify.warning(`${msg}`)}
              />
              <Field
                className={scss.form__input}
                type="password"
                name="passwordConfirm"
                placeholder="Confirm Password"
                validate={validatePassword}
              />
              <ErrorMessage
                name="passwordConfirm"
                render={msg => Notify.warning(`${msg}`)}
              />
              <button className={`${scss.button__primary} ${scss.form__button}`} type="submit">
                Next
              </button>
            </Form>
           </Formik>
        ) : (
          <Formik
            validationSchema={schemasForStepSecond}
            initialValues={initialValue}
            onSubmit={handleSubmitForRegister}
            autoComplete="off"
          >
            <Form className={scss.form__container}>
              <Field
                className={scss.form__input}
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <ErrorMessage
                name="name"
                render={msg => Notify.warning(`${msg}`)}
              />
              <Field
                className={scss.form__input}
                type="text"
                name="region"
                placeholder="City, region"
                required
              />
              <ErrorMessage
                name="region"
                render={msg => Notify.warning(`${msg}`)}
              />
              <Field
                className={scss.form__input}
                type="tel"
                name="number"
                placeholder="Mobile phone"
              />
              <ErrorMessage
                name="number"
                render={msg => Notify.warning(`${msg}`)}
              />
              <span
                className={`${scss.button__primary} ${scss.form__back_button}`}
                onClick={backButtonClick}
              >
                &#5130; Go back
              </span>
              <button className={`${scss.button__primary} ${scss.form__button}`} type="submit">
                Register
              </button>
            </Form>
          </Formik>
        )}
        <p className={scss.form__description}>
          Already have an account?{' '}
          <NavLink className={scss.description__nav} to="/login">Login</NavLink>
        </p>
        </>}
        {isLoginPage && <>
        <p>LOGIN FORM</p>
        </>}
        </>
  );
};

export default AuthForm;
