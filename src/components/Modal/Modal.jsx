import React from "react";
import "./modal.scss";

const Modal = ({ active, setActive, children }) => {
    React.useEffect(() => {
        document.addEventListener('keydown', function(e) {
            if( e.keyCode === 27 ){
                setActive(false)
            }
        })
        return () => document.removeEventListener('keydown', function(e) {
            if( e.keyCode === 27 ){
                setActive(false)
            }
        })
    })
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default Modal;

// const [modalActive, setModalActive] = useState(true);

//  <button onClick={() => setModalActive(true)}></button>
