
import scss from "./header.module.scss";
import base from "../../../helpers/container.module.scss";

import Logo from "components/headerFolder/Logo/Logo";
import Nav from "components/headerFolder/Nav/Nav";


const Header = () => {

  return (
    <header className={scss.header}>
      <div id="header" className={base.container}>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}

export default Header;

