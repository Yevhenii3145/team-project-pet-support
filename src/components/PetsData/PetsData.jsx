import { PetsList } from '../PetsList/PetsList';
import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import AddsPetContent from '../ModalAddsPet/ModalAddPetPages/AddsPetContent';
import { useState } from 'react';
import SvgInsert from "../Svg/Svg";

import scss from './pets-data.module.scss';

function PetsData() {
  const [modalShow, setModalShow] = useState(false);

  const closeModal = () => {
    setModalShow(false);
  };

  const showModal = () => {
    setModalShow(true);
  };

  return (
    <>
      <div className={scss.petsData_title_box}>
        <div className={scss.petsData_title_box}>
          <h2 className={scss.petsData_title}>My pets:</h2>
        </div>
        <div className={scss.addPetModal_buttonBox}>
          <button
            className={scss.addPetModal_button}
            type="button"
            onClick={showModal}
          >
            Add pet +
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

        <div>
          <PetsList />
        </div>
      </div>
    </>
  );
}

export default PetsData;
