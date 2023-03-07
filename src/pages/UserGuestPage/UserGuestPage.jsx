import UserInfo from "components/userFolder/UserGuest/UserInfo";
import PetsInfo from "components/userFolder/UserGuest/PetsInfo";
import base from '../../helpers/container.module.scss';
import style from '../UserPage/user-page.module.scss';
import scss from '../../components/petsUserFolder/PetsData/pets-data.module.scss';
import scssS from '../../components/petsUserFolder/PetsData/pets-data.module.scss';

const UserGuestPage = () => {

    return(
        <div className={style.userPage_container}>
      <section className={base.container}>
        <div className={style.userPage_section}>
          <h2 className={style.userPage_title}>User information:</h2>
          <div className={style.userData_box}>
          <UserInfo/>
          </div>
        </div>
        <div className={scssS.petsData_title_box}>
        <h2 className={style.userPage_title}>Users own pets:</h2>
        </div>
        <div className={style.petsData_section}>
        <div className={scss.petsData__container}>
        <PetsInfo/>
        </div>
        </div>
      </section>
    </div>        
    )
}

export default UserGuestPage;