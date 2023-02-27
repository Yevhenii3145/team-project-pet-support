import scss from './pets-list.module.scss';
import SvgInsert from '../../utilsFolder/Svg/Svg';
import { useDispatch, useSelector } from "react-redux";
import operationsPets from 'redux/operations/userPetsApi';
import { useState } from 'react';
import EditPetContent from '../ModalAddsPet/ModalAddPetPages/EditPetContent';
import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export function PetsList() {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.user.pets);
 

  const onDeletePet = (_id) => {
        // dispatch(operationsPets.deletePet(_id));
    Confirm.show(
      '',
      'Are you sure you want to delete your petcard?',
      'Yes',
      'No',
      () => { dispatch(operationsPets.deletePet(_id)) },
      () => {},
      {
        messageFontSize: '20px',
        borderRadius: '8px',
        cssAnimationStyle: 'zoom',
        okButtonColor: '#ffffff',
        okButtonBackground: '#eebb9c',
        cancelButtonColor: '#ffffff',
        cancelButtonBackground: '#F59256',
      },
    );
  }
  const [modalShow, setModalShow] = useState(false);

   const closeModal = () => {
    setModalShow(false);
    document.body.style.overflow = 'visible';
  };

  const showModal = () => {
    setModalShow(true);
    document.body.style.overflow = 'hidden';
  };

  const elements = pets.map(({ name, birthday, breed, image, comments, _id }) => {

    const editDate = e => {
      const reversDate = e.slice(0, 10).split('-').reverse();
      return reversDate.join('.');
 }

    return (
      <li className={scss.petsList_box} key={_id}>
        <img className={scss.petsList_photo} src={image} alt="" />
        <div className={scss.petsList_text_box}>
          <p className={scss.petsList_field}>Name: {name}</p>
          <p className={scss.petsList_field} >Date of birth: {editDate(birthday)}</p>
          <p className={scss.petsList_field}>Breed: {breed} </p>
          <p className={scss.petsList_field}>Comments: {comments} </p>
          <button className={scss.petsList_button} onClick={()=> onDeletePet(_id)} type="button">
            <SvgInsert id="icon-delete" />
          </button>
          <button
            className={scss.iconEdit_btn}
              onClick={showModal }
            >
            <SvgInsert id="icon-edit" />
          </button>
          <div >
        {modalShow && (
          <>
            <ModalAddsPet onClose={closeModal}>
                  <EditPetContent _id={_id} pets={pets}/>
            </ModalAddsPet>
          </>
        )}
      </div>
        </div>
      </li>
    );
  });

  return (
    <>
      <ol className={scss.petList_container} >{elements}</ol>
    </>
  );
}
