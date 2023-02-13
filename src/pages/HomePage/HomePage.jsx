import SharedLayout from 'components/SharedLayout/SharedLayout';
import scss from './home-page.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
  // const searchParams = new URLSearchParams(document.location.search);
  // const usertoken = searchParams.get('usertoken');
  // console.log(usertoken);
  // if (usertoken) {
  //   window.localStorage.setItem('token', usertoken);
  // }

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (usertoken) {
  //     window.localStorage.setItem('token', usertoken);
  //     navigate('user');
  //   }
  // }, [usertoken, navigate]);

  return (
    <section className={scss.div}>
      <SharedLayout />
    </section>
  );
};

export default HomePage;
