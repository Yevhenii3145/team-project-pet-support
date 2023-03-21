import { useState } from 'react';
import { useDispatch } from 'react-redux';
import scss from './modal-add-pet-pages.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { editNotice, fetchCategoryNotices } from 'redux/operations/noticesOperation';
import { Report } from 'notiflix/build/notiflix-report-aio';
import SvgInsert from 'components/utilsFolder/Svg/Svg';
import 'flatpickr/dist/themes/airbnb.css'
import Flatpickr from 'react-flatpickr'
import cities from '../../../../helpers/ua.json'

const EditNoticeContent = ({ close, notice, noticeCategory }) => {

  const [stepOne, setStepOne] = useState(true);

  const [petCategory, setPetCategory] = useState(notice.category);
  const [petName, setPetName] = useState(notice.name);
  const [petTitle, setPetTitle] = useState(notice.title);
  const [petDate, setPetDate] = useState(notice.birthday);
  const [petBreed, setPetBreed] = useState(notice.breed);
  const [currentRadioValue, setCurrentRadioValue] = useState(notice.sex);
  const [petLocation, setPetLocation] = useState(notice.location);
  const [petPrice, setPetPrice] = useState(Number.parseFloat(notice.price));
  const [currencyValue, setCurrencyValue] = useState(getCurrencyPricePet)
  const [imageURL, setImageURL] = useState(notice.image);
  const [petComments, setPetComments] = useState(notice.comments);

  const dispatch = useDispatch();

  function getCurrencyPricePet() {
    const result = notice.price.split(' ');
    return result[1];
  };

  const changeStepOne = e => {
    switch (e.currentTarget.name) {
      case 'title':
        setPetTitle(e.currentTarget.value);
        break;
      case 'name':
        setPetName(e.currentTarget.value);
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
      case 'comments':
        setPetComments(e.currentTarget.value);
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

  const handleSubmitForStepOne = e => {
    e.preventDefault();
    if(petCategory === ''){
      return Report.warning(
        'Warning!',
        'Please, selected type of category!',
        'Okay',
        );
    }
    if(petDate === ''){
      return Report.warning(
        'Warning!',
        'Please, selected date of birth!',
        'Okay',
        );
    }

    const form = e.currentTarget;
    const { title, name, date, breed } = form.elements;
    setPetTitle(title.value);
    setPetName(name.value);
    setPetDate(date.value);
    setPetBreed(breed.value);
    return changeStep();
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if(currentRadioValue === ''){
      return Report.warning(
        'Warning!',
        'Please, selected type of sex!',
        'Okay',
        );
    }
    if(!cities.find(city => `${city.city}, ${city.admin_name}` === petLocation)){
      console.log('not')
      return Report.warning(
        'Warning!',
        'Please, selected location from the list!',
        'Okay',
        );
    }
    const form = e.currentTarget;
    const { image } = form.elements;

    const data = new FormData();

    data.append('category', petCategory);
    data.append('title', petTitle);
    data.append('name', petName);
    data.append('birthday', petDate);
    data.append('breed', petBreed);
    data.append('sex', currentRadioValue);
    data.append('location', petLocation);
    data.append('price', `${petPrice} ${currencyValue}`);
    if (image.files.length > 0) {
      data.append('image', image.files[0]) ;
    }
    data.append('comments', petComments);

    dispatch(editNotice({
      id: notice._id,
      data
    }))
    .then(() => dispatch(fetchCategoryNotices(noticeCategory)))

    setPetTitle('');
    setPetCategory('');
    setPetBreed('');
    setPetDate('');
    setPetName('');
    setPetLocation('');
    setPetPrice('');
    setCurrentRadioValue('')
    setCurrencyValue('UAH')
    setImageURL(null);
    form.reset();
    return close();
  };

  const handleRadioChangeCategory = e => {
    setPetCategory(e.target.value);
  };

  const handleRadioChange = e => {
    setCurrentRadioValue(e.target.value);
  };

  return (
    <>
      <div className={scss.modalAdds_page}>
        <div className={scss.modal_notice__close} onClick={close}>
          <SvgInsert id="icon-close-add-notice" />
        </div>
        <h3 className={scss.modalAdds_page__tittle}>Add pet</h3>
        {stepOne && (
          <>
            <p className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}>
            Type of category <span className={scss.star}>*</span>
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
                placeholder="Type name"
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
                Name pet <span className={scss.star}>*</span>
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
                Data of birth <span className={scss.star}>*</span>
              </label>
              <Flatpickr
                className={scss.modalAdds_page__input}
                options={{
                  dateFormat: 'm.d.Y',
                  maxDate: new Date()
                }}
                name="date"
                type="text"
                placeholder="Type date of birth"
                value={petDate}
                required
              />
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Breed <span className={scss.star}>*</span>
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
                  required
                  className={scss.radioButtonInputSex}
                  type="radio"
                  name="sex"
                  value={currentRadioValue}
                  defaultChecked
                  />
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
            <label className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}>
            Location<span className={scss.star}>*</span>:
            </label>   
            <input 
            className={scss.modalAdds_page__input}
            list="region" 
            name="location"
            value={petLocation}
            placeholder="City, region"
            onChange={changeStepOne}
             />  
            <datalist id="region">
              {cities.map(city => <option
                      key={`${city.city}.${city.lat}`}
                      value={`${city.city}, ${city.admin_name}`}
                      />)}  
            </datalist>
            {petCategory === "sell" && (
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Price<span className={scss.star}>*</span>:
                <div className={scss.modalAdds_page__input_price}>
                <select name="currency" value={currencyValue} className={scss.modalAdds_page__input_select} onChange={(e)=>{
                  setCurrencyValue(e.target.value)
                }}>
                  <option value="UAH">UAH</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
                <input
                  className={scss.modalAdds_page__input_select}
                  type="number"
                  name="price"
                  min="1"
                  required
                  placeholder="Type price"
                  value={petPrice}
                  onChange={changeStepOne}
                />
                </div>
              </label>
            )}
            <div className={scss.add__pet__container}>
              <p
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Load the pet’s image <span className={scss.star}>*</span>
              </p>
              <input
                className={scss.addspet__imgInput}
                type="file"
                name="image"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                id="img"
                onChange={handleImageChange}
              />
              <label className={scss.addspet__imgLabel} htmlFor="img">
                {imageURL && (
                  <div className={scss.addspetPhoto__container}>
                    <img src={imageURL} alt="pet" className={scss.addspet__photo} />
                  </div>
                )}
              </label>
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_commit_box}`}
              >
                Comments <span className={scss.star}>*</span>
              </label>
              <textarea
                className={scss.modalAdds_commit}
                type="text"
                name="comments"
                defaultValue={petComments}
                placeholder="Type comment"
                required
                minLength="8"
                maxLength="120"
                onChange={changeStepOne}
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
    </>
  );
};
export default EditNoticeContent;
