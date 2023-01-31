import scss from "./login-page.module.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { NavLink } from 'react-router-dom';

const schemasForStepFirst = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(7).max(32),
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

const LoginPage = () => {

    const initialValue = {
    email: '',
    password: ''
    };

    const handleSubmit = (values, actions) => {

        console.log(values);
        console.log(actions);
        let user;

        user = values;
        console.log(user);
        actions.resetForm();
        return ;
    };

    return (
        <section className={scss.login__container}>
            <div className={scss.login__form__section}>
                <h1 className={scss.login__tittle}>Login</h1>
                
                <Formik
                    validationSchema={schemasForStepFirst}
                    initialValues={initialValue}
                    onSubmit={handleSubmit}
                >
                    <Form className={scss.login__form} autoComplete="off">
                    <Field
                        className={scss.login__input}
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
                        className={scss.login__input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        validate={validatePassword}
                    />
                    <ErrorMessage
                        name="password"
                        render={msg => Notify.warning(`${msg}`)}
                    />
                    <button className={scss.login__button} type="submit">
                        Login
                    </button>
                    </Form>
                </Formik>
                
                <p className={scss.login__description}>
                    Don't have an account?{' '}
                    <NavLink to="/register" className={scss.login__nav}>
                        Register
                    </NavLink>
                </p>
            </div>
        </section>
    );
}

export default LoginPage;