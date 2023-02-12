import { PetsList } from '../PetsList/PetsList';
import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import AddsPetContent from '../ModalAddsPet/ModalAddPetPages/AddsPetContent';
// import { getPets, getUserId } from '../../redux/selectors';
import operations from "../../redux/operations";
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import SvgInsert from "../Svg/Svg";
import { useSelector, useDispatch } from "react-redux"
import scss from './pets-data.module.scss';

function PetsData() {
  const [modalShow, setModalShow] = useState(false);

  const pets = useSelector(state => state.user.pets);

  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getUserPet())
  }, [dispatch]);

  const closeModal = () => {
    setModalShow(false);
    document.body.style.overflow = 'visible';
  };

  const showModal = () => {
    setModalShow(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      {loading && <Loader />}
      <div className={scss.petsData_title_box}>
        <h2 className={scss.petsData_title}>My pets:</h2>
        <div className={scss.addPetModal_buttonBox}>
          <button
            className={scss.addPetModal_button}
            type="button"
            onClick={showModal}
          >
            Add pet <SvgInsert className={scss.iconAddPet} id='icon-add-pet' />
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
          <PetsList pets={pets} />

        </div>
      </div>
    </>
  );
}

export default PetsData;
