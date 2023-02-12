import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import scss from './modal-add-pet-pages.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import operations from '../../../redux/operations';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Loader from 'components/Loader/Loader';
import SvgInsert from 'components/Svg/Svg';

const AddsPetContent = ({ close }) => {
  const [sell, setSell] = useState(false);
  const [stepOne, setStepOne] = useState(true);

  const [petCategory, setPetCategory] = useState('');
  const [petName, setPetName] = useState('');
  const [petTitle, setPetTitle] = useState('');
  const [petDate, setPetDate] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [currentRadioValue, setCurrentRadioValue] = useState('');
  const [petLocation, setPetLocation] = useState('');
  const [petPrice, setPetPrice] = useState(Number);
  const [imageURL, setImageURL] = useState(null);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  const changeStepOne = e => {
    switch (e.currentTarget.name) {
      case 'title':
        setPetTitle(e.currentTarget.value);
        break;
      case 'name':
        setPetName(e.currentTarget.value);
        break;
      case 'date':
        setPetDate(e.currentTarget.value);
        break;
      case 'breed':
        setPetBreed(e.currentTarget.value);
        break;
      case 'location':
        setPetLocation(e.currentTarget.value);
        break;
      case 'price':
        setPetPrice(e.currentTarget.value);
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
  const formatDate = `${dateNow.getDate() < 10 ? `0${dateNow.getDate()}` : dateNow.getDate()
    }.${dateNow.getMonth() < 10
      ? `0${dateNow.getMonth() + 1}`
      : dateNow.getMonth() + 1
    }.${dateNow.getFullYear()}`;

  const handleSubmitForStepOne = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { title, name, date, breed } = form.elements;
    setPetTitle(title.value);
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
    const data = new FormData();

    data.append('category', petCategory);
    data.append('title', petTitle);

    data.append('name', petName);
    data.append('birthday', petDate);
    data.append('breed', petBreed);
    data.append('location', petLocation);
    data.append('sex', currentRadioValue);
    data.append('price', petPrice);
    data.append('comments', comments.value);
    data.append('image', image.files[0]);

    setPetTitle('');
    setPetCategory('');
    setPetBreed('');
    setPetDate('');
    setPetName('');
    setPetLocation('');
    setPetPrice('');
    setImageURL(null);
    dispatch(operations.addNotice(data));
    form.reset();
    return close();
  };

  const handleRadioChangeCategory = e => {
    setPetCategory(e.target.value);
    if (e.target.value === 'sell') {
      setSell(true);
    }
  };

  const handleRadioChange = e => {
    setCurrentRadioValue(e.target.value);
  };

  const validateFile = () => {
    if(!imageURL){
      Report.warning(
        'Notice Warning',
        'Please add a photo.',
        'Okay',
        );
    }
  }

  return (
    <>
      {loading && <Loader />}
      <div className={scss.modalAdds_page}>
        <div className={scss.modal_notice__close} onClick={close}>
          <SvgInsert id="icon-close-add-notice" />
        </div>
        <h3 className={scss.modalAdds_page__tittle}>Add pet</h3>
        {stepOne && (
          <>
            <p className={scss.modalAdds_descriptions}>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </p>
            <div className={scss.buttonCont}>
            <input
                id='lost-found'
                  required
                  name="petCategory"
                  value="lost-found"
                  type="radio"
                  checked={petCategory === 'lost-found'}
                  className={scss.radioButtonInput}
                  onChange={handleRadioChangeCategory}
                />
              <label htmlFor='lost-found' className={scss.buttonCategory}>
                lost/found
              </label>
              <input
                id='for-free'
                  required
                  name="petCategory"
                  value="for-free"
                  type="radio"
                  checked={petCategory === 'for-free'}
                  className={scss.radioButtonInput}
                  onChange={handleRadioChangeCategory}
                />
              <label htmlFor='for-free' className={scss.buttonCategory}>
                in good hands
              </label>
              <input
                id='sell'
                  required
                  name="petCategory"
                  value="sell"
                  type="radio"
                  checked={petCategory === 'sell'}
                  className={scss.radioButtonInput}
                  onChange={handleRadioChangeCategory}
                />
              <label htmlFor='sell' className={scss.buttonCategory}>
                sell
              </label>
            </div>
            <form onSubmit={handleSubmitForStepOne}>
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Tittle of ad <span className={scss.star}>*</span>
              </label>
              <input
                className={scss.modalAdds_page__input}
                name="title"
                placeholder="Type name pet"
                type="text"
                minLength="2"
                maxLength="48"
                required
                value={petTitle}
                onChange={changeStepOne}
              />
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
                minLength="2"
                maxLength="16"
                required
                value={petName}
                onChange={changeStepOne}
              />
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Data of birth
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
                minLength="2"
                maxLength="24"
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
          </>
        )}
        {!stepOne && (
          <form
            id="book-add-form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <section>
              <h2
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                The sex<span className={scss.star}>*</span>:
              </h2>
              <div className={scss.radioButtonSection}>
              <input
                  id='male'
                    required
                    className={scss.radioButtonInputSex}
                    type="radio"
                    name="sex"
                    value="male"
                    onChange={handleRadioChange}
                  />
                <label htmlFor='male' className={scss.radioButton}>
                  <SvgInsert id="icon-male" />
                  Male
                </label>
                <input
                  id='female'
                    required
                    className={scss.radioButtonInputSex}
                    type="radio"
                    name="sex"
                    value="female"
                    onChange={handleRadioChange}
                  />
                <label htmlFor='female' className={scss.radioButton}>
                  <SvgInsert id="icon-female" />
                  Female
                </label>
              </div>
            </section>
            <label
              className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
            >
              Location<span className={scss.star}>*</span>:
            </label>
            <input
              className={scss.modalAdds_page__input}
              type="text"
              name="location"
              placeholder="City, region"
              required
              value={petLocation}
              onChange={changeStepOne}
            />
            {sell && (
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Price<span className={scss.star}>*</span>:
                <input
                  className={scss.modalAdds_page__input}
                  type="number"
                  name="price"
                  min="1"
                  required
                  placeholder="Type price"
                  value={petPrice}
                  onChange={changeStepOne}
                />
              </label>
            )}
            <div className={scss.add__pet__container}>
              <p
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Load the pet’s image
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
                placeholder="Type breed"
                required
                minLength="8"
                maxLength="120"
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
export default AddsPetContent;
