import React from "react";
import "./modaladdspet.css";

const ModalAddsPet = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal_active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {children}
               
            </div>
        </div>
    )
}


export default ModalAddsPet;