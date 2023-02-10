import scss from './pets-list.module.scss';
import SvgInsert from '../Svg/Svg';
import { useDispatch } from "react-redux";
import operations from '../../redux/operations';

export function PetsList({ pets }) {
  const dispatch = useDispatch();

  const onDeletePet = (_id) => {
    
    dispatch(operations.deletePet(_id));
  }

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
          <p className={scss.petsList_field}>Comments:{comments} </p>
          <button className={scss.petsList_button} onClick={()=> onDeletePet(_id)} type="button">
            <SvgInsert id="icon-delete" />
          </button>
        </div>
      </li>
    );
  });
// setUserBirthday(userInStore.birthday !== undefined ? formatDate(userInStore.birthday) : "00.00.0000");
  return (
    <>
      <ol style={{ width: '100%', padding: '0' }}>{elements}</ol>
    </>
  );
}
