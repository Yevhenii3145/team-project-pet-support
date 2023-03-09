import scss from './recover-password-page.module.scss';
import AuthForm from 'components/userFolder/AuthForm/AuthForm';
import { useSelector } from "react-redux";

import { getLoading } from "redux/selectors/selectors";
import { Spinner } from '@chakra-ui/react'

const RecoverPasswordPage = () => {

  const loading = useSelector(getLoading)

  return (
    <section className={scss.reset__password__container}>
      <div className={scss.reset__password__form__section}>
        <h1 className={scss.reset__password__tittle}>Recover password</h1>
        <AuthForm />
        {loading && <Spinner />}
      </div>
    </section>
  );
};

export default RecoverPasswordPage;
