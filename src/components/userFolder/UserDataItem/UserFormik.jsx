import scss from './user-data-item.module.scss'
import SvgInsert from '../../utilsFolder/Svg/Svg'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import operations from 'redux/operations/userOperations'
import axios from 'axios'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import 'flatpickr/dist/themes/airbnb.css'
import Flatpickr from 'react-flatpickr'
import { Oval } from 'react-loader-spinner'

const { REACT_APP_BASE_URL } = process.env
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`

export function UserFormik() {
    const dispatch = useDispatch()
    const userInStore = useSelector(state => state.auth.user)
    const token = useSelector(state => state.auth.token)
    const [loading, setLoading] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userBirthday, setUserBirthday] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userCity, setUserCity] = useState('')
    const dateNow = new Date()

    const formatDate = date => {
        const dateFormat = new Date(date)
        return `${
            dateFormat.getMonth() + 1 < 10
                ? `0${dateFormat.getMonth() + 1}`
                : dateFormat.getMonth() + 1
        }.${
            dateFormat.getDate() < 10
                ? `0${dateFormat.getDate()}`
                : dateFormat.getDate()
        }.${dateFormat.getFullYear()}`
    }

    useEffect(() => {
        setLoading(true)
        if (token !== undefined) {
            fetch(`${REACT_APP_BASE_URL}/api/users/current`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => response.json())
                .then(data => {
                    setUserName(data.name)
                    setUserEmail(data.email)
                    setUserBirthday(
                        data.birthday !== undefined
                            ? formatDate(data.birthday)
                            : '00.00.0000'
                    )
                    setUserPhone(data.phone)
                    setUserCity(data.city)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                })
            return
        } else {
            setUserName(userInStore.name)
            setUserEmail(userInStore.email)
            setUserBirthday(
                userInStore.birthday !== undefined
                    ? formatDate(userInStore.birthday)
                    : '00.00.0000'
            )
            setUserPhone(userInStore.phone)
            setUserCity(userInStore.city)
            setLoading(false)
        }
    }, [userInStore, token])

    const handleChange = e => {
        switch (e.currentTarget.name) {
            case 'name':
                setUserName(e.currentTarget.value)
                break

            case 'email':
                setUserEmail(e.currentTarget.value)
                break

            case 'phone':
                setUserPhone(e.currentTarget.value)
                break

            case 'city':
                setUserCity(e.currentTarget.value)
                break

            default:
                return
        }
    }

    const [active, setActive] = useState('')

    const changeIcon = name => {
        if (active === name) {
            return setActive('')
        }
        setActive(name)
    }

    const toggleIcon = name => {
        if (active === name) {
            return <SvgInsert id="icon-done" />
        } else {
            return <SvgInsert id="icon-edit-active" />
        }
    }

    const handleSubmitMail = e => {
        e.preventDefault()
        const form = e.currentTarget
        const { email } = form.elements
        if(!email.disabled){
          return
        }
        if (!email.value) {
            return Notify.failure('Required!', { timeout: 5000 })
        }
        if (
            /^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i.test(
                email.value
            ) &&
            email.value.length < 36
        ) {
            return dispatch(operations.updateUser({ email: email.value }))
        } else {
            return Notify.failure('Invalid email address!', { timeout: 5000 })
        }
    }

    const handleSubmitName = e => {
        e.preventDefault()
        const form = e.currentTarget
        const { name } = form.elements
        if(!name.disabled){
          return
        }
        if (!name.value) {
            return Notify.failure('Required!', { timeout: 5000 })
        }
        return dispatch(operations.updateUser({ name: name.value }))
    }

    const handleSubmitBirthday = e => {
        e.preventDefault()
        const form = e.currentTarget
        const { birthday } = form.elements
        if(!birthday.disabled){
          return
        }
        if (!birthday.value) {
            return Notify.failure('Required!', { timeout: 5000 })
        }
        return dispatch(operations.updateUser({ birthday: birthday.value }))
    }

    const handleSubmitPhone = e => {
        e.preventDefault()
        const form = e.currentTarget
        const { phone } = form.elements
        if(!phone.disabled){
          return
        }
        if (!phone.value) {
            return Notify.failure('Required!', { timeout: 5000 })
        }
        if (phone.value.length !== 12) {
            return Notify.failure('Is not correct format, must 380xxxxxxxxx!', {
                timeout: 5000,
            })
        }
        if (
            !/^3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/.test(
                phone.value
            )
        ) {
            return Notify.failure('Is not correct format, must 380xxxxxxxxx!', {
                timeout: 5000,
            })
        } else {
            return dispatch(operations.updateUser({ phone: phone.value }))
        }
    }

    const handleSubmitCity = e => {
        e.preventDefault()
        const form = e.currentTarget
        const { city } = form.elements
        if(!city.disabled){
          return
        }
        if (!city.value) {
            return Notify.failure('Required!', { timeout: 5000 })
        }
        if (!/^[aA-zZ]/.test(city.value)) {
            return Notify.failure('Is not correct format, must only letters!', {
                timeout: 5000,
            })
        } else {
            return dispatch(operations.updateUser({ city: city.value }))
        }
    }

    return (
        <>
            <div className={scss.userDataForm_box}>
                {loading ? (
                    <>
                        <div className={scss.loader__content}>
                            <Oval
                                height={80}
                                width={80}
                                color="#F59256"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#F59256"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <form onSubmit={handleSubmitName}>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}>
                                    Name:
                                </label>
                                {active && active === 'name' ? (
                                    <input
                                        onChange={handleChange}
                                        type="name"
                                        name="name"
                                        value={userName}
                                        className={
                                            scss.userDataForm_field_active
                                        }
                                    />
                                ) : (
                                    <input
                                        onChange={handleChange}
                                        type="name"
                                        name="name"
                                        value={userName}
                                        disabled
                                        className={scss.userDataForm_field}
                                    />
                                )}
                                <button
                                    className={scss.iconEdit_btn}
                                    onClick={() => changeIcon('name')}
                                    type="submit"
                                >
                                    {active ? (
                                        toggleIcon('name')
                                    ) : (
                                        <SvgInsert id="icon-edit" />
                                    )}
                                </button>
                            </div>
                        </form>

                        <form onSubmit={handleSubmitMail}>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}>
                                    Email:
                                </label>
                                {active && active === 'email' ? (
                                    <input
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                        value={userEmail}
                                        className={
                                            scss.userDataForm_field_active
                                        }
                                    />
                                ) : (
                                    <input
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                        value={userEmail}
                                        disabled
                                        className={scss.userDataForm_field}
                                    />
                                )}
                                <button
                                    className={scss.iconEdit_btn}
                                    onClick={() => changeIcon('email')}
                                >
                                    {active ? (
                                        toggleIcon('email')
                                    ) : (
                                        <SvgInsert id="icon-edit" />
                                    )}
                                </button>
                            </div>
                        </form>

                        <form onSubmit={handleSubmitBirthday}>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}>
                                    Birthday:
                                </label>
                                {active && active === 'birthday' ? (
                                    <Flatpickr
                                        options={{
                                            dateFormat: 'm.d.Y',
                                            maxDate: `${formatDate(dateNow)}`,
                                        }}
                                        onChange={([date]) => {
                                            setUserBirthday(formatDate(date))
                                        }}
                                        type="text"
                                        name="birthday"
                                        value={userBirthday}
                                        className={
                                            scss.userDataForm_field_active
                                        }
                                    />
                                ) : (
                                    <Flatpickr
                                        options={{
                                            dateFormat: 'm.d.Y',
                                            maxDate: `${formatDate(dateNow)}`,
                                        }}
                                        onChange={([date]) => {
                                            setUserBirthday(formatDate(date))
                                        }}
                                        type="text"
                                        name="birthday"
                                        value={userBirthday}
                                        disabled
                                        className={scss.userDataForm_field}
                                    />
                                )}
                                <button
                                    className={scss.iconEdit_btn}
                                    onClick={() => changeIcon('birthday')}
                                >
                                    {active ? (
                                        toggleIcon('birthday')
                                    ) : (
                                        <SvgInsert id="icon-edit" />
                                    )}
                                </button>
                            </div>
                        </form>

                        <form onSubmit={handleSubmitPhone}>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}>
                                    Phone:
                                </label>
                                {active && active === 'phone' ? (
                                    <input
                                        onChange={handleChange}
                                        type="tel"
                                        name="phone"
                                        value={userPhone}
                                        className={
                                            scss.userDataForm_field_active
                                        }
                                    />
                                ) : (
                                    <input
                                        onChange={handleChange}
                                        type="tel"
                                        name="phone"
                                        value={userPhone}
                                        disabled
                                        className={scss.userDataForm_field}
                                    />
                                )}
                                <button
                                    className={scss.iconEdit_btn}
                                    onClick={() => changeIcon('phone')}
                                    type="submit"
                                >
                                    {active ? (
                                        toggleIcon('phone')
                                    ) : (
                                        <SvgInsert id="icon-edit" />
                                    )}
                                </button>
                            </div>
                        </form>

                        <form onSubmit={handleSubmitCity}>
                            <div className={scss.field_box}>
                                <label className={scss.userDataForm_label}>
                                    City:
                                </label>
                                {active && active === 'city' ? (
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="city"
                                        value={userCity}
                                        className={
                                            scss.userDataForm_field_active
                                        }
                                    />
                                ) : (
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="city"
                                        value={userCity}
                                        disabled
                                        className={scss.userDataForm_field}
                                    />
                                )}
                                <button
                                    className={scss.iconEdit_btn}
                                    onClick={() => changeIcon('city')}
                                >
                                    {active ? (
                                        toggleIcon('city')
                                    ) : (
                                        <SvgInsert id="icon-edit" />
                                    )}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    )
}
