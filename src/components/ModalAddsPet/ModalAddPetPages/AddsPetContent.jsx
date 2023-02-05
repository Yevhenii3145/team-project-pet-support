import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import scss from './modal-add-pet-pages.module.scss';
import operations from '../../../redux/operations';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Loader from 'components/Loader/Loader';

const AddsPetContent = ({ close }) => {
  const [stepOne, setStepOne] = useState(true);
  const [petName, setPetName] = useState('');
  const [petDate, setPetDate] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [imageURL, setImageURL] = useState(null);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

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
    reader.onloadend = () => {
      setImageURL(reader.result);
    };
    reader.readAsDataURL(image);
    return;
  };

  const dateNow = new Date();
  const formatDate = `${dateNow.getDate() < 10 ? `0${dateNow.getDate()}` : dateNow.getDate()}.${
    dateNow.getMonth() < 10 ? `0${dateNow.getMonth() + 1}` : dateNow.getMonth() + 1
  }.${dateNow.getFullYear()}`;
  console.log(formatDate)

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
    console.log(petName, petBreed, petDate);
    return changeStep();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { image, comments } = form.elements;
    const data = new FormData();
    data.append('name', petName);
    data.append('birthday', petDate);
    data.append('breed', petBreed);
    data.append('comments', comments.value);
    data.append('image', image.files[0]);
    console.log(petName, petDate, petBreed, comments.value, image.files[0]);
    setPetBreed('');
    setPetDate('');
    setPetName('');
    setImageURL(null);
    dispatch(operations.addPet(data));
    form.reset();
    return close();
  };

  return (
    <div className={scss.modalAdds_page}>
      {loading && <Loader />}
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
              multiple
              onChange={handleImageChange}
            />
            <label className={scss.addspet__imgLabel} htmlFor="img"></label>
            {imageURL && (
              <div className={scss.addspetPhoto__container}>
                <p>You image:</p>
                <img src={imageURL} alt="pet" />
              </div>
            )}
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
              minLength={8}
              required
            />

            <div className={scss.addPet__button}>
              <button
                className={`${scss.button__primary_main} ${scss.modalAdds_page__button}`}
                type="submit"
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
  );
};
export default AddsPetContent;
