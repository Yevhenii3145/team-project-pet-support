import scss from './user-data-item.module.scss';
import SvgInsert from '../Svg/Svg';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from 'redux/operations';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`;

export function UserFormik() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const userInStore = useSelector(state => state.auth.user);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBirthday, setUserBirthday] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCity, setUserCity] = useState('');

  
  const formatDate = (date) =>{
    const dateFormat = new Date(date)
    return `${dateFormat.getDate() < 10 ? `0${dateFormat.getDate()}` : dateFormat.getDate()}.${dateFormat.getMonth() + 1 < 10 ? `0${dateFormat.getMonth() + 1}` : dateFormat.getMonth() + 1}.${dateFormat.getFullYear()}`
  }

  useEffect(() => {
    if (userInStore.token !== undefined) {
      fetch(`${REACT_APP_BASE_URL}/api/users/current`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userInStore.token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setUser(data);
          setUserName(data.name);
          setUserEmail(data.email);
          setUserBirthday(data.birthday !== undefined ? formatDate(data.birthday) : '00.00.0000');
          setUserPhone(data.phone);
          setUserCity(data.city);
        })
        .catch(error => console.log(error));
      return;
    } else {
      setUser(userInStore);
      setUserName(userInStore.name);
      setUserEmail(userInStore.email);
      setUserBirthday(userInStore.birthday !== undefined ? formatDate(userInStore.birthday) : "00.00.0000");
      setUserPhone(userInStore.phone);
      setUserCity(userInStore.city);
    }
  }, [userInStore]);


  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setUserName(e.currentTarget.value);
        break;

      case 'birthday':
        setUserBirthday(e.currentTarget.value);
        break;

      case 'email':
        setUserEmail(e.currentTarget.value);
        break;

      case 'phone':
        setUserPhone(e.currentTarget.value);
        break;

      case 'city':
        setUserCity(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const [active, setActive] = useState('');

  const changeIcon = name => {
    if (active === name) {
      return setActive('');
    }
    setActive(name);
  };

  const toggleIcon = name => {
    if (active === name) {
      return <SvgInsert id="icon-done" />;
    } else {
      return <SvgInsert id="icon-edit-active" />;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, birthday, phone, city } = form.elements;
    if (name.value !== user.name) {
      dispatch(operations.updateUser({ name: name.value }));
    }
    if (email.value !== user.email) {
      dispatch(operations.updateUser({ email: email.value }));
    }
    if (userInStore.birthday && userInStore.birthday !== birthday.value) {
      dispatch(operations.updateUser({ birthday: `"${birthday.value}"` }));
    }
    if (phone.value !== user.phone) {
      dispatch(operations.updateUser({ phone: phone.value }));
    }
    if (city.value !== user.city) {
      dispatch(operations.updateUser({ city: city.value }));
    }
  };


  return (
    <>
      <form className={scss.userDataForm_box} onSubmit={handleSubmit}>
        <div className={scss.field_box}>
          <label className={scss.userDataForm_label}>Name:</label>
          {active && active === 'name' ? (
            <input
              onChange={handleChange}
              type="name"
              name="name"
              value={userName}
              className={scss.userDataForm_field}
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
          >
            {active ? toggleIcon('name') : <SvgInsert id="icon-edit" />}
          </button>
        </div>
        <div className={scss.field_box}>
          <label className={scss.userDataForm_label}>Email:</label>
          {active && active === 'email' ? (
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={userEmail}
              className={scss.userDataForm_field}
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
            {active ? toggleIcon('email') : <SvgInsert id="icon-edit" />}
          </button>
        </div>
        <div className={scss.field_box}>
          <label className={scss.userDataForm_label}>Birthday:</label>
          {active && active === 'birthday' ? (
            <input
              onChange={handleChange}
              type="text"
              name="birthday"
              value={userBirthday}
              className={scss.userDataForm_field}
            />
          ) : (
            <input
              onChange={handleChange}
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
            {active ? toggleIcon('birthday') : <SvgInsert id="icon-edit" />}
          </button>
        </div>
        <div className={scss.field_box}>
          <label className={scss.userDataForm_label}>Phone:</label>
          {active && active === 'phone' ? (
            <input
              onChange={handleChange}
              type="tel"
              name="phone"
              value={userPhone}
              className={scss.userDataForm_field}
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
          >
            {active ? toggleIcon('phone') : <SvgInsert id="icon-edit" />}
          </button>
        </div>
        <div className={scss.field_box}>
          <label className={scss.userDataForm_label}>City:</label>
          {active && active === 'city' ? (
            <input
              onChange={handleChange}
              type="text"
              name="city"
              value={userCity}
              className={scss.userDataForm_field}
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
            {active ? toggleIcon('city') : <SvgInsert id="icon-edit" />}
          </button>
        </div>
      </form>
    </>
  );
}
