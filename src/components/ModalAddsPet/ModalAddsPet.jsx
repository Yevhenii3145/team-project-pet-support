import React from "react";
import scss from "./modaladdspet.module.scss";

const ModalAddsPet = ({active, setActive, children}) => {
    return (
        <div className={active ? `${scss.modal_active}` : `${scss.modal}`} onClick={() => setActive(false)}>
            <div className={scss.modal__content} onClick={e => e.stopPropagation()}>
                {children}
               
            </div>
        </div>
    )
}


export default ModalAddsPet;