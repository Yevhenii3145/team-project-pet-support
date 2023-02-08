import scss from "./pets-list.module.scss";
import SvgInsert from "../Svg/Svg";
// import { useDispatch } from "react-redux";
// import operations from '../../redux/operations'; 


export function PetsList({pets}) {
     
  
  // const dispatch = useDispatch();
    
 
//         const onDeletePet= (petId) => {
//        const action = operations.deletePet(petId);
//         dispatch(action);
// }

    const elements = pets.map(({ name, date, breed, image, comments, petId }) => {
        return <li className={scss.petsList_box} key={petId}>
            <img className={scss.petsList_photo} src={image} alt="" />
                    <div className={scss.petsList_text_box}>
                        <p className={scss.petsList_field}>Name:  {name}</p>
                        <p className={scss.petsList_field}>Date of birth:  {date}</p>
                        <p className={scss.petsList_field}>Breed:  {breed} </p>
                        <p className={scss.petsList_field}>Comments:{comments} </p>
            <button className={scss.petsList_button} type='button'><SvgInsert id='icon-delete'/></button>
                    </div>
        </li>
    })
    
  return (
    <>
          <ol style={{ width: "100%", padding:'0'}}>
        {elements}
      </ol>
    </>
    
)}
    
    

