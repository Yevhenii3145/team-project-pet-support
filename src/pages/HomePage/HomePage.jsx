import SharedLayout from 'components/SharedLayout/SharedLayout';
import scss from './home-page.module.scss';

const HomePage = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const usertoken = searchParams.get('usertoken');
  console.log(usertoken);
  if (usertoken) {
    window.localStorage.setItem('token', usertoken);
  }

  return (
    <section className={scss.div}>
      <SharedLayout />
    </section>
  );
};

export default HomePage;
