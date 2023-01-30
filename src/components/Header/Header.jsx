import scss from './Header.module.scss';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';

const Header = () => {
  return (
    <>
      <Logo />
      <Nav />
    </>
  );
};

export default Header;
