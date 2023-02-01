
import scss from "./header.module.scss";
import base from "../../helpers/container.module.scss";
import Logo from "components/Logo/Logo";
import Nav from "components/Nav/Nav";


const Header = () => {

  return (
    <header className={scss.header}>
      <div className={base.container}>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}

export default Header;

