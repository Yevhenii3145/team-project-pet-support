import scss from './login-page.module.scss';
import AuthForm from 'components/AuthForm/AuthForm';
// import LoginForm from '../../components/LoginForm/LoginForm'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth-operation";
import { getLoading } from "redux/auth/auth-selectors";
import { Spinner } from '@chakra-ui/react'

const LoginPage = () => {

  const dispatch = useDispatch();

  const loading = useSelector(getLoading)

  const onLogin = (data) => {
    dispatch(login(data));
  }

  return (
    <section className={scss.login__container}>
      <div className={scss.login__form__section}>
        <h1 className={scss.login__tittle}>Login</h1>
        <AuthForm onSubmit={onLogin} />
        {loading && <Spinner />}
      </div>
    </section>
  );
};

export default LoginPage;
