import scss from './auth-form.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/operations';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NavLink, useLocation, useParams } from 'react-router-dom';

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

const AuthForm = () => {
  const [stepOne, setStepOne] = useState(true);
  const location = useLocation();
  const page = location.pathname;

  let user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

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
    if (stepOne) {
      if (values.password !== values.passwordConfirm) {
        return Notify.failure('Your passwords must have the same value');
      }
      return setStepOne(false);
    }
    if (!stepOne) {
      user = {
        email: values.email,
        password: values.password,
        name: values.name,
        city: values.region,
        phone: values.number
      };
      console.log(user);
      actions.resetForm();
      setStepOne(true);
      return dispatch(operations.registerNewUser(user))
    }
  };

  const handleSubmitForLogin = (values, actions) => {
    console.log(values);
    user = values;
    console.log(user);
    actions.resetForm();
    return;
  };

  const backButtonClick = () => {
    if (!stepOne) {
      return setStepOne(true);
    }
  };

  return (
    <>
      {page === '/register' && (
        <>
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
                <button
                  className={`${scss.button__primary_main} ${scss.form__button}`}
                  type="submit"
                >
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
                  className={`${scss.button__primary_not_main} ${scss.form__back_button}`}
                  onClick={backButtonClick}
                >
                  &#5130; Go back
                </span>
                <button
                  className={`${scss.button__primary_main} ${scss.form__button}`}
                  type="submit"
                >
                  Register
                </button>
              </Form>
            </Formik>
          )}
          <p className={scss.form__description}>
            Already have an account?{' '}
            <NavLink className={scss.description__nav} to="/login">
              Login
            </NavLink>
          </p>
        </>
      )}
      {page === '/login' && (
        <>
          <Formik
            validationSchema={schemasForStepFirst}
            initialValues={initialValue}
            onSubmit={handleSubmitForLogin}
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
                className={`${scss.form__input} ${scss.form__login__input}`}
                type="password"
                name="password"
                placeholder="Password"
                validate={validatePassword}
              />
              <ErrorMessage
                name="password"
                render={msg => Notify.warning(`${msg}`)}
              />

              <button
                className={`${scss.button__primary_main} ${scss.form__button}`}
                type="submit"
              >
                Login

              </button>
            </Form>
          </Formik>
          <p className={scss.form__description}>
            Don't have an account?{' '}
            <NavLink to="/register" className={scss.description__nav}>
              Register
            </NavLink>
          </p>
        </>
      )}
    </>
  );
};

export default AuthForm;
