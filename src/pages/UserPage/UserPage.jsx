// import scss from "./user-page.module.scss";

import React from "react";
import { UserData } from "../../components/UserData/UserData";
import Logout from "../../components/Logout/Logout";
import PetsData from "../../components/PetsData/PetsData";
import scss from "../../helpers/container.module.scss";


function UserPage() {

    return (
        <div className={scss.container}>
            <h2 style={{
                fontFamily: 'Manrope',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '20px',
                lineHeight: '27px',
            }}
            >My information:</h2>
            <div style={{
                display: 'block',
                width: '100%',
                background: '#FFFFFF',
                boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
                borderRadius: '20px',
                marginBottom: '47px',
                marginTop: '18px',
                paddingBottom: '20px',
            }}
                >
                    <UserData />
                    <Logout />
            </div>
            <PetsData />
            
        </div>
    )
}
export default UserPage;