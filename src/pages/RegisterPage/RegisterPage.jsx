import scss from './register-page.module.scss';

import AuthForm from 'components/AuthForm/AuthForm';

const RegisterPage = () => {
  return (
    <section className={scss.register__container}>
      <div className={scss.register__section}>
        <h1 className={scss.register__tittle}>Registration</h1>
       <AuthForm />
      </div>
    </section>
  );
};

export default RegisterPage;
