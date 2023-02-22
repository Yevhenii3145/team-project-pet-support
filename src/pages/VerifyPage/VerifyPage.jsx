import scss from './login-page.module.scss';
import AuthForm from 'components/userFolder/AuthForm/AuthForm';
import { useSelector } from "react-redux";

import { getLoading } from "redux/selectors/selectors";
import { Spinner } from '@chakra-ui/react'

const VerifyPage = () => {

  const loading = useSelector(getLoading)

  return (
    <section className={scss.login__container}>
      <div className={scss.login__form__section}>
        <h1 className={scss.login__tittle}>Verify</h1>
        <AuthForm />
        {loading && <Spinner />}
      </div>
    </section>
  );
};

export default VerifyPage;
