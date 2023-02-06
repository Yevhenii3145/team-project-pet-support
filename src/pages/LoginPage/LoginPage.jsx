import scss from './login-page.module.scss';
import AuthForm from 'components/AuthForm/AuthForm';
import { useSelector } from "react-redux";

import { getLoading } from "redux/selectors";
import { Spinner } from '@chakra-ui/react'

const LoginPage = () => {

  const loading = useSelector(getLoading)

  return (
    <section className={scss.login__container}>
      <div className={scss.login__form__section}>
        <h1 className={scss.login__tittle}>Login</h1>
        <AuthForm />
        {loading && <Spinner />}
      </div>
    </section>
  );
};

export default LoginPage;
