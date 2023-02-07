import { PetsList } from '../PetsList/PetsList';
import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import AddsPetContent from '../ModalAddsPet/ModalAddPetPages/AddsPetContent';
import {getUser} from '../../redux/selectors'
import { useState } from 'react';
import SvgInsert from "../Svg/Svg";
import { useSelector, useDispatch } from "react-redux"
import scss from './pets-data.module.scss';

function PetsData() {
  const [modalShow, setModalShow] = useState(false);
  
  // const user = useSelector(getUser())
  // console.log(user)

  const closeModal = () => {
    setModalShow(false);
  };

  const showModal = () => {
    setModalShow(true);
  };

  return (
    <>
      <div className={scss.petsData_title_box}>
        {/* <div className={scss.petsData_title_box}> */}
          <h2 className={scss.petsData_title}>My pets:</h2>
        {/* </div> */}
        <div className={scss.addPetModal_buttonBox}>
          <button
            className={scss.addPetModal_button}
            type="button"
            onClick={showModal}
          >
            Add pet <SvgInsert id='icon-add-pet'/>
          </button>
        </div>
      </div>
      <div className={scss.petsData__container}>
        {modalShow && (
          <>
            <ModalAddsPet onClose={closeModal}>
              <AddsPetContent />
            </ModalAddsPet>
          </>
        )}

        <div className={scss.overflow}>
          <PetsList  />

        </div>
      </div>
    </>
  );
}

export default PetsData;
