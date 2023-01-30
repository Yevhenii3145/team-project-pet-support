import scss from './register-page.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import { NavLink } from 'react-router-dom';

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

const RegisterPage = () => {
  const [stepOne, setStepOne] = useState(true);

  const initialValue = {
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    region: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
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
    <section className={scss.register__container}>
      <div className={scss.register__form__section}>
        <h1 className={scss.register__tittle}>Registration</h1>
        {stepOne ? (
          <Formik
            validationSchema={schemasForStepFirst}
            initialValues={initialValue}
            onSubmit={handleSubmit}
          >
            <Form className={scss.register__form} autoComplete="off">
              <Field
                className={scss.register__input}
                type="email"
                name="email"
                placeholder="Email"
                validate={Yup.string().email().required()}
              />
              <ErrorMessage
                name="email"
                render={msg => Notify.warning(`${msg}`)}
              />
              <Field
                className={scss.register__input}
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
                className={scss.register__input}
                type="password"
                name="passwordConfirm"
                placeholder="Confirm Password"
                validate={validatePassword}
              />
              <ErrorMessage
                name="passwordConfirm"
                render={msg => Notify.warning(`${msg}`)}
              />
              <button className={scss.register__button} type="submit">
                Next
              </button>
            </Form>
          </Formik>
        ) : (
          <Formik
            validationSchema={schemasForStepSecond}
            initialValues={initialValue}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Form className={scss.register__form}>
              <Field
                className={scss.register__input}
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
                className={scss.register__input}
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
                className={scss.register__input}
                type="tel"
                name="number"
                placeholder="Mobile phone"
              />
              <ErrorMessage
                name="number"
                render={msg => Notify.warning(`${msg}`)}
              />
              <button
                className={scss.register__back_button}
                type="button"
                onClick={backButtonClick}
              >
                &#5130; Go back
              </button>
              <button className={scss.register__button} type="submit">
                Register
              </button>
            </Form>
          </Formik>
        )}
        <p className={scss.register__description}>
          Already have an account?{' '}
          <span className={scss.description__nav}>Login</span>
        </p>
      </div>
    </section>
  );
};

//<NavLink to="/login">Login</NavLink>

export default RegisterPage;
