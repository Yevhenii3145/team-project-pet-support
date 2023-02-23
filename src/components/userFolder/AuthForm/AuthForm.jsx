import scss from './auth-form.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import operations from '../../../redux/operations/userOperations'
import GoogleAuth from '../../headerFolder/Nav/GoogleNav/GoogleNav'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import Loader from 'components/utilsFolder/Loader/Loader'
import * as Yup from 'yup'
import { useState } from 'react'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { NavLink, useLocation } from 'react-router-dom'
import SvgInsert from 'components/utilsFolder/Svg/Svg'
import cities from './ua.json'

const schemasForStepFirst = Yup.object().shape({
    email: Yup.string()
        .email()
        .min(10, 'The minimum number of characters in the field is 10.')
        .max(63, 'The maximum number of characters in the field is 63.'),
    password: Yup.string().required().min(7).max(32),
    passwordConfirm: Yup.string().required(),
})

function validatePassword(value) {
    let error
    if (!value) {
        error = 'Password is required'
    } else if (value.includes(' ')) {
        error = 'Invalid password, must not include spaces'
    }
    return error
}

function validateEmail(value) {
    let error
    if (!value) {
        error = 'E-mail address required'
    } else if (
        !/^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i.test(
            value
        )
    ) {
        error =
            'The e-mail address is not correct, there must be at least 2 characters before the "@" symbol, the hyphen cannot be at the beginning, and the e-mail cannot contain Latin letters'
    }
    return error
}

const schemasForStepSecond = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    region: Yup.string().required('Region is required!'),
    number: Yup.string()
        .matches(
            /[0-9]/,
            'Field must contain only numbers, format +380xxxxxxxxx!'
        )
        .required('Phone number is required!')
        .min(9, 'Cannot be less than nine characters!')
        .max(9, 'Cannot be more than nine characters!'),
})

const schemasForLogin = Yup.object().shape({
    email: Yup.string().email().required().min(10).max(63),
    password: Yup.string().required().min(7).max(32),
})

const AuthForm = () => {
    const [stepOne, setStepOne] = useState(true)
    const [onShowPassword, setOnShowPassword] = useState(false)
    const [onShowConfirmPassword, setOnShowConfirmPassword] = useState(false)
    const location = useLocation()
    const page = location.pathname

    // let user = useSelector(state => state.auth.user);
    // console.log(user);
    const loading = useSelector(state => state.auth.loading)
    const dispatch = useDispatch()

    const onLogin = data => {
        dispatch(operations.login(data))
    }

    const initialValue = {
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        region: '',
        number: '',
    }

    const handleSubmitForRegister = (values, actions) => {
        if (stepOne) {
            if (values.password !== values.passwordConfirm) {
                return Notify.failure(
                    'Your passwords must have the same value!',
                    {
                        timeout: 6000,
                    }
                )
            }
            return setStepOne(false)
        }
        if (!stepOne) {

            if(!cities.find(city => `${city.city}, ${city.admin_name}` === values.region)){
                console.log('not')
                return Notify.failure(
                    'Please select a region from the list!',
                    {
                        timeout: 6000,
                    }
                )
            }

            const user = {
                email: values.email,
                password: values.password,
                name: values.name,
                city: values.region,
                phone: `380${values.number}`,
            }
            actions.resetForm()
            setStepOne(true)
            console.log(user)
            return dispatch(operations.registerNewUser(user))
        }
    }

    const handleSubmitForLogin = (values, actions) => {
        const user = {
            email: values.email,
            password: values.password,
        }
        actions.resetForm()
        return onLogin(user)
    }

    const backButtonClick = () => {
        if (!stepOne) {
            return setStepOne(true)
        }
    }

    const showPassword = () => {
        return setOnShowPassword(!onShowPassword)
    }
    const showConfirmPassword = () => {
        return setOnShowConfirmPassword(!onShowConfirmPassword)
    }

    const btnAuthVerify = (values, actions) => {
        const user = {
            email: values.email,
            password: values.password,
        }
        actions.resetForm()
        return dispatch(operations.authVerify(user))
    }

    return (
        <>
            {loading && <Loader />}
            {page === '/register' && (
                <>
                    {stepOne ? (
                        <Formik
                            validationSchema={schemasForStepFirst}
                            initialValues={initialValue}
                            onSubmit={handleSubmitForRegister}
                        >
                            <Form
                                className={scss.form__container}
                                autoComplete="off"
                            >
                                <div className={scss.form__input_container}>
                                    <Field
                                        className={scss.form__input}
                                        type="email"
                                        name="email"
                                        validate={validateEmail}
                                        placeholder=" "
                                    />
                                    <label className={scss.form__label}>
                                        Email
                                    </label>
                                    <ErrorMessage
                                        name="email"
                                        render={msg => (
                                            <p className={scss.error__mesage}>
                                                {msg}
                                            </p>
                                        )}
                                    />
                                </div>
                                <div className={scss.form__input_container}>
                                    <Field
                                        className={scss.form__input}
                                        type={
                                            !onShowPassword
                                                ? 'password'
                                                : 'text'
                                        }
                                        name="password"
                                        validate={validatePassword}
                                        placeholder=" "
                                    />
                                    <label className={scss.form__label}>
                                        Password
                                    </label>
                                    <span
                                        className={
                                            scss.form__input__password_show
                                        }
                                        onClick={showPassword}
                                    >
                                        {!onShowPassword ? (
                                            <SvgInsert id="eye" />
                                        ) : (
                                            <SvgInsert id="eye-blocked" />
                                        )}
                                    </span>
                                    <ErrorMessage
                                        name="password"
                                        render={msg => (
                                            <p className={scss.error__mesage}>
                                                {msg}
                                            </p>
                                        )}
                                    />
                                </div>
                                <div className={scss.form__input_container}>
                                    <Field
                                        className={scss.form__input}
                                        type={
                                            !onShowConfirmPassword
                                                ? 'password'
                                                : 'text'
                                        }
                                        name="passwordConfirm"
                                        placeholder=" "
                                        validate={validatePassword}
                                    />
                                    <label className={scss.form__label}>
                                        Confirm Password
                                    </label>
                                    <span
                                        className={
                                            scss.form__input__password_show
                                        }
                                        onClick={showConfirmPassword}
                                    >
                                        {!onShowConfirmPassword ? (
                                            <SvgInsert id="eye" />
                                        ) : (
                                            <SvgInsert id="eye-blocked" />
                                        )}
                                    </span>
                                    <ErrorMessage
                                        name="passwordConfirm"
                                        render={msg => (
                                            <p className={scss.error__mesage}>
                                                {msg}
                                            </p>
                                        )}
                                    />
                                </div>
                                <button
                                    className={`${scss.button__primary_main} ${scss.form__button}`}
                                    type="submit"
                                >
                                    Next
                                </button>
                                <GoogleAuth />
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
                                <div className={scss.form__input_container}>
                                    <Field
                                        className={scss.form__input}
                                        type="text"
                                        name="name"
                                        placeholder=" "
                                        required
                                    />
                                    <label className={scss.form__label}>
                                        Name
                                    </label>
                                    <ErrorMessage
                                        name="name"
                                        render={msg => (
                                            <p className={scss.error__mesage}>
                                                {msg}
                                            </p>
                                        )}
                                    />
                                </div>
                                <div className={scss.form__input_container}>
                                    <Field
                                        className={scss.form__input}
                                        name="region"
                                        list="region"
                                        type="text"
                                        placeholder=" "
                                    />
                                    <datalist id="region">
                                        {cities.map(city => (
                                            <option
                                                key={`${city.city}.${city.lat}`}
                                            >
                                                {city.city}, {city.admin_name}
                                            </option>
                                        ))}
                                    </datalist>
                                    <label className={scss.form__label}>
                                        City, region
                                    </label>
                                    <ErrorMessage
                                        name="region"
                                        render={msg => (
                                            <p className={scss.error__mesage}>
                                                {msg}
                                            </p>
                                        )}
                                    />
                                </div>
                                <div className={scss.form__input_container}>
                                    <Field
                                        className={`${scss.form__input} ${scss.form__input_phone}`}
                                        type="tel"
                                        name="number"
                                        placeholder=" "
                                    />
                                    <span className={scss.form__input_number}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="20"
                                        >
                                            <rect
                                                width="25"
                                                height="10"
                                                fill="#005BBB"
                                            />
                                            <rect
                                                width="25"
                                                height="10"
                                                y="10"
                                                fill="#FFD500"
                                            />
                                        </svg>
                                        <p>+380</p>
                                    </span>
                                    <label className={scss.form__label}>
                                        Mobile phone
                                    </label>
                                    <ErrorMessage
                                        name="number"
                                        render={msg => (
                                            <p className={scss.error__mesage}>
                                                {msg}
                                            </p>
                                        )}
                                    />
                                </div>
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
                                <GoogleAuth />
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
                        validationSchema={schemasForLogin}
                        initialValues={initialValue}
                        onSubmit={handleSubmitForLogin}
                    >
                        <Form
                            className={scss.form__container}
                            autoComplete="off"
                        >
                            <div className={scss.form__input_container}>
                            <Field
                                className={scss.form__input}
                                type="email"
                                name="email"
                                placeholder=" "
                            />
                            <label className={scss.form__label}>Email</label>
                            <ErrorMessage
                                name="email"
                                render={msg => <p className={scss.error__mesage}>
                                {msg}
                            </p>}
                            />
                            </div>
                            <div className={scss.form__input_container}>
                            <Field
                                className={`${scss.form__input} ${scss.form__login__input}`}
                                type={
                                    !onShowPassword
                                        ? 'password'
                                        : 'text'
                                }
                                name="password"
                                placeholder=" "
                                validate={validatePassword}
                            />
                            <label className={scss.form__label}>Password</label>
                            <span
                                        className={
                                            scss.form__input__password_show
                                        }
                                        onClick={showPassword}
                                    >
                                        {!onShowPassword ? (
                                            <SvgInsert id="eye" />
                                        ) : (
                                            <SvgInsert id="eye-blocked" />
                                        )}
                                    </span>
                            <ErrorMessage
                                name="password"
                                render={msg => <p className={scss.error__mesage}>
                                {msg}
                            </p>}
                            />
                            </div>
                            <button
                                className={`${scss.button__primary_main} ${scss.form__button}`}
                                type="submit"
                            >
                                Login
                            </button>
                            <p className={scss.form__description}>
                                Resend verification email? Click{' '}
                                <NavLink
                                    to="/verify"
                                    className={scss.description__nav}
                                >
                                    here
                                </NavLink>
                            </p>
                            <GoogleAuth />
                        </Form>
                    </Formik>
                    <p className={scss.form__description}>
                        Don't have an account?{' '}
                        <NavLink
                            to="/register"
                            className={scss.description__nav}
                        >
                            Register
                        </NavLink>
                    </p>
                </>
            )}
            {page === '/verify' && (
                <>
                    <Formik
                        validationSchema={schemasForLogin}
                        initialValues={initialValue}
                        onSubmit={btnAuthVerify}
                    >
                        <Form
                            className={scss.form__container}
                            autoComplete="off"
                        >
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
                                Verify
                            </button>
                        </Form>
                    </Formik>

                    <p className={scss.form__description}>
                        Go to back?{' '}
                        <NavLink to="/login" className={scss.description__nav}>
                            Login
                        </NavLink>
                    </p>
                </>
            )}
        </>
    )
}

export default AuthForm
