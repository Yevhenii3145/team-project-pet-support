import scss from './login-page.module.scss';
import AuthForm from 'components/AuthForm/AuthForm';

const LoginPage = () => {
  return (
    <section className={scss.login__container}>
      <div className={scss.login__form__section}>
        <h1 className={scss.login__tittle}>Login</h1>
        <AuthForm />
      </div>
    </section>
  );
};

export default LoginPage;
