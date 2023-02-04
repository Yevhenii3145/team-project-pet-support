// import scss from "./user-page.module.scss";

import React from "react";
import { UserData } from "../../components/UserData/UserData";
import Logout from "../../components/Logout/Logout";
import PetsData from "../../components/PetsData/PetsData";
import scss from "../../helpers/container.module.scss";
import style from "./user-page.module.scss"


function UserPage() {

    return (
        <div className={`${scss.container} ${style.section}`}>
            <div style={{display:'block', height:'100%'}} >
                <h2 className={style.userPage_title}>My information:</h2>
                <div  className={style.userData_box}>
                    <UserData />
                    <Logout />
                </div>
            </div>
            <PetsData />
            
        </div>
    )
}
export default UserPage;