import Loader from "components/utilsFolder/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchInfoPetUser } from "redux/operations/userGuestOperations";
import scss from "../../petsUserFolder/PetsList/pets-list.module.scss";
import style from '../../petsUserFolder/PetsData/pets-data.module.scss';
import { EmptyPetsList } from "components/petsUserFolder/EmptyPetsList/EmptyPetsList";


const PetsInfo = () => {

const loading = useSelector(state=>state.guest.loading)
const pets = useSelector(state=>state.guest.pets)
const userName = useSelector(state=>state.guest.user.name)

const {id} = useParams()
const dispatch = useDispatch()

useEffect(() => {
    dispatch(fetchInfoPetUser(id))
}, [dispatch, id])

const editDate = e => {
    const reversDate = e.slice(0, 10).split('-').reverse();
    return reversDate.join('.');
}


    return (
        <div className={style.overflow}>
         <ul className={scss.petList_container}>
        {loading && <Loader/>}
        {!loading && pets.length === 0 
        ? <EmptyPetsList text={`${userName} hasn't added any own animals to yourself list yet`}/>
        : pets.map(({name, birthday, breed, image, comments, _id}) => {
    return (
            <li className={scss.petsList_box} key={_id}>
                 <img className={scss.petsList_photo} src={image} alt="pet" />
            <div className={scss.petsList_text_box}>
                <p className={scss.petsList_field}>
                   <span className={scss.labelPets}>Name:</span> 
                    {name}</p>
                <p className={scss.petsList_field}>
                   <span className={scss.labelPets}>Date of birth:</span>  
                    {editDate(birthday)}</p>
                <p className={scss.petsList_field}>
                   <span className={scss.labelPets}>Breed:</span>  
                    {breed} </p>
                <p className={scss.petsList_field}>
                   <span className={scss.labelPets}>Comments:</span>  
                    {comments} </p>
            </div>
            </li>
       )
    })}
         </ul>
         </div>
    )
}

export default PetsInfo;