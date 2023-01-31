


import scss from "./header.module.scss";
import base from "../../helpers/container.module.scss";
import Logo from "components/Logo/Logo";
import Nav from "components/Nav/Nav";


const Header = () => {
  return (
    <>
      <Logo />
      <Nav />
    </>
  );
};


export default Header;

    const onShowMenu = () => {
        
    }

    return (
        <header className={scss.header}>
            <div className={ base.container}>
            <Logo/>
            <Nav/>
            </div>
        </header>
    )
}

export default Header;

