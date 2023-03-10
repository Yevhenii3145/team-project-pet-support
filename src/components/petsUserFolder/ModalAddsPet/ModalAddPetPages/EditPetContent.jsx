import { useState } from 'react';
import { useDispatch } from 'react-redux';
import scss from './modal-add-pet-pages.module.scss';
import operationsPets from 'redux/operations/userPetsApi';
import { Report } from 'notiflix/build/notiflix-report-aio';
// import Loader from 'components/Loader/Loader';
import SvgInsert from '../../../utilsFolder/Svg/Svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const EditPetContent = ({ close, pets, _id }) => {
  console.log('_id', _id);
  console.log('pets', pets);
  const [stepOne, setStepOne] = useState(true);
  // const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  const isPet = pets.find(e => e._id === _id);
  
  console.log('isPet', isPet);
  const date = isPet.birthday;
  const editDate = e => {
  const reversDate = e.slice(0, 10).split('-').reverse();
  return reversDate.join('.');
 }

  const [petName, setPetName] = useState(isPet.name);
  const [petDate, setPetDate] = useState(editDate(date));
  const [petBreed, setPetBreed] = useState(isPet.breed);
  const [imageURL, setImageURL] = useState(isPet.image);
  const [petComments, setPetComments] = useState(isPet.comments);

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
  const formatDate = `${
    dateNow.getDate() < 10 ? `0${dateNow.getDate()}` : dateNow.getDate()
  }.${
    dateNow.getMonth() < 10
      ? `0${dateNow.getMonth() + 1}`
      : dateNow.getMonth() + 1
  }.${dateNow.getFullYear()}`;

  const handleSubmitForStepOne = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, date, breed } = form.elements;
    setPetName(name.value);
    setPetDate(date.value);
    setPetBreed(breed.value);
    if (new Date(petDate) >= new Date(formatDate)) {
      return Report.info(
        'Pet Info',
        'Please choose a date no later than today.',
        'Okay'
      );
    }
    return changeStep();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { image, comments } = form.elements;
    setPetComments(comments.value);
    const data = new FormData();
    data.append('name', petName);
    data.append('birthday', petDate);
    data.append('breed', petBreed);
    data.append('comments', petComments);
    data.append('image', image.files[0]);
    console.log(image.files[0])
    console.log("yyyy")
    setPetBreed('');
    setPetDate('');
    setPetName('');
    setImageURL(null);
    dispatch(operationsPets.addPet(data));
    form.reset();
    return close();
  };

  const validateFile = () => {
    if(!imageURL){
      Report.warning(
        'Pet Warning',
        'Please add a photo.',
        'Okay',
        );
    }
  }

  return (
    <>
      {/* {loading && <Loader />} */}
      <div className={scss.modalAdds_page}>
        <div className={scss.modalAdds_page__close} onClick={close}>
          <SvgInsert id="icon-close" />
        </div>
        <h3 className={scss.modalAdds_page__tittle}>Add pet</h3>
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
              required
              value={petName}
              onChange={changeStepOne}
            />
            <label
              className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
            >
              Date of birth
            </label>
            <input
              className={scss.modalAdds_page__input}
              name="date"
              type="text"
              pattern="^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$"
              title="Date must be in the format: DD.MM.YYYY or DD/MM/YYYY or DD-MM-YYYY"
              placeholder="Type date of birth"
              required
              value={petDate}
              onChange={changeStepOne}
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
              required
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
                required
                title='is required'
                multiple
                onChange={handleImageChange}
              />
              <label className={scss.addspet__imgLabel} htmlFor="img">
                {imageURL && (
                  <div className={scss.addspetPhoto__container}>
                    <img src={imageURL} alt="pet" className={scss.addspet__photo}/>
                  </div>
                )}
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
                value={petComments}
                minLength={8}
                required
              />

              <div className={scss.addPet__button}>
                <button
                  className={`${scss.button__primary_main} ${scss.modalAdds_page__button}`}
                  type="submit"
                  onClick={validateFile}
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
