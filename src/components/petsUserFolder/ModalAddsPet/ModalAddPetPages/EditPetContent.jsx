import { useState } from 'react';
import {useSelector} from 'react-redux';
import scss from './modal-add-pet-pages.module.scss';
// import operationsPets from 'redux/operations/userPetsApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/utilsFolder/Loader/Loader';
import SvgInsert from '../../../utilsFolder/Svg/Svg';
import Flatpickr from 'react-flatpickr';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env
axios.defaults.baseURL = `${REACT_APP_BASE_URL}/api`


const EditPetContent = ({ close,  _id }) => {
  // const dispatch = useDispatch();
    
  const [stepOne, setStepOne] = useState(true);
  const loading = useSelector(state => state.user.loading);
  const pets = useSelector(state => state.user.pets)

  const isPet = pets.find(e => e._id === _id);

  const dateString = isPet.birthday;
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month}.${day}.${year}`;

  const [petName, setPetName] = useState(isPet.name);
  const [petDate, setPetDate] = useState(formattedDate)
  const [petBreed, setPetBreed] = useState(isPet.breed);
  const [imageURL, setImageURL] = useState(isPet.image);
  const [petComments, setPetComments] = useState(isPet.comments);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeStepOne = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setPetName(e.currentTarget.value);
        break;

      case 'date':
        setPetDate(e.currentTarget.value);
        break;

      case 'breed':
        setPetBreed(e.currentTarget.value);
        break;

      default:
        return;
      
    }
  };

  const changeStep = () => {
    return setStepOne(!stepOne);
  };

  const handleImageChange = e => {
    const reader = new FileReader();
    const image = e.target.files[0];
    if (image?.size > 5242880) {
      Notify.warning('File is too big, please download max 5 mb!', {
      timeout: 6000,
      distance: '100px',
      opacity: '0.8',
      useIcon: false,
      fontSize: '20px',
      borderRadius: '40px',
      showOnlyTheLastOne: true
      });
      setImageURL(null);
      return;
    }
      reader.onloadend = () => {
      setImageURL(reader.result);
    };
      reader.readAsDataURL(image);
      return;
  };

  const dateNow = new Date();
  const formatDate = date => {
    const dateFormat = new Date(date)
    return `${
      dateFormat.getMonth() + 1 < 10
          ? `0${dateFormat.getMonth() + 1}`
          : dateFormat.getMonth() + 1
  }.${
    dateFormat.getDate() < 10
        ? `0${dateFormat.getDate()}`
        : dateFormat.getDate()
}.${dateFormat.getFullYear()}`
}

  const handleSubmitForStepOne = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, date, breed } = form.elements;
    setPetName(name.value);
    setPetDate(date.value);
    setPetBreed(breed.value);
    if (new Date(petDate) >= new Date(formatDate)) {
      return Notify.failure('Please choose a date no later than today!', 
      {distance: '100px',
      opacity: '0.8',
      useIcon: false,
      fontSize: '20px',
      borderRadius: '40px',
      showOnlyTheLastOne: true})
    }
    return changeStep();
  };

 
  
const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { image, comments } = form.elements;
  setPetComments(comments.value);

  if ( image.files.length > 0) {
  
    const data = new FormData();
    data.append('name', petName);
    data.append('birthday', petDate);
    data.append('breed', petBreed);
    data.append('comments', petComments);
    data.append('image', image.files[0]);
    // console.log('image', image.files[0])
    // console.log('imageURL', imageURL)

    try {
      await axios.put(`/users/${_id}`, data);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
    }
  } else {
   
    try {
      await axios.put(`/users/${_id}`, {
        name: petName,
        birthday: petDate,
        breed: petBreed,
        comments: petComments,

      });
          console.log('imageURL', imageURL)
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
    }
  }

  setPetComments('');
  setPetBreed('');
  setPetDate('');
  setPetName('');
  setImageURL(null);
  form.reset();
  return close();
  };


  return (
    <>
      {loading && <Loader />}
      <div className={scss.modalAdds_page}>
        <div className={scss.modalAdds_page__close} onClick={close}>
          <SvgInsert id="icon-close" />
        </div>
        <h3 className={scss.modalAdds_page__tittle}>Edite pet</h3>
        {stepOne && (
          <form onSubmit={handleSubmitForStepOne}>
            <label
              className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
            >
              Name pet
            </label>
            <input
              className={scss.modalAdds_page__input}
              name="name"
              placeholder="Type name pet"
              type="text"
              // required
              value={petName}
              onChange={changeStepOne}
            />
            <label
              className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
            >
              Date of birth
            </label>
            <Flatpickr
              className={scss.modalAdds_page__input}
              name="date"
              type="text"
              placeholder="Type date of birth"
              // required
              value={petDate}
              options={{
                dateFormat: 'm.d.Y',
                maxDate: `${formatDate(dateNow)}`,
            }}
            onChange={([date]) => {
                setPetDate(formatDate(date))
            }}
            />
            <label
              className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
            >
              Breed
            </label>
            <input
              className={scss.modalAdds_page__input}
              type="text"
              name="breed"
              placeholder="Type breed"
              // required
              value={petBreed}
              onChange={changeStepOne}
            />
            <div className={scss.addPet__button}>
              <button
                className={`${scss.button__primary_main} ${scss.modalAdds_page__button}`}
                type="submit"
              >
                Next
              </button>
              <span
                className={`${scss.button__primary_not_main} ${scss.modalAdds_page__button}`}
                onClick={close}
              >
                Cancel
              </span>
            </div>
          </form>
        )}
        {!stepOne && (
          <form
            action=""
            id="book-add-form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className={scss.add__pet__container}>
              <p className={scss.modalAdds_page__field}>
                Add photo and some comments
              </p>
              <input
                className={scss.addspet__imgInput}
                type="file"
                name="image"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                id="img"
                // required
                title='is required'
                multiple
                onChange={handleImageChange}
              />
              <label className={scss.addspet__imgLabel} htmlFor="img">
                <div className={scss.addspetPhoto__container}>
                  <img src={imageURL} alt="pet" className={scss.addspet__photo}/>
                </div>
                </label>
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_commit_box}`}
              >
                Comments
              </label>
              <textarea
                className={scss.modalAdds_commit}
                type="text"
                name="comments"
                placeholder="Type comments"
                defaultValue={petComments}
                minLength={8}
                // required
              />

              <div className={scss.addPet__button}>
                <button
                  className={`${scss.button__primary_main} ${scss.modalAdds_page__button}`}
                  type="submit"
                  disabled={isSubmitting}
                  // onClick={validateFile}
                >
                  Done
                </button>
                <span
                  className={`${scss.button__primary_not_main} ${scss.modalAdds_page__button}`}
                  onClick={changeStep}
                >
                  Back
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};
export default EditPetContent;