import scss from "./header.module.scss";
import base from "../../../helpers/container.module.scss";

import Logo from "components/headerFolder/Logo/Logo";
import Nav from "components/headerFolder/Nav/Nav";
import { useTheme } from '../../../hooks/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsChecked(newTheme === 'dark');
  };


  return (
    <header className={scss.header}>
      <div className={base.container}>
        <div className={scss.theme_box}>
          <Logo />
          <label className={scss.toggle}>
              <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
              <span className={scss.slider} />
              <div className={scss.fa_icon}>
                <FontAwesomeIcon icon={faSun} className={`${!isChecked ? scss.fa_sun : scss.fa_sun_hidden}`} />
              <FontAwesomeIcon icon={faMoon} className={`${isChecked ? scss.fa_moon : scss.fa_moon_hidden}`} />
              </div>
          </label>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
