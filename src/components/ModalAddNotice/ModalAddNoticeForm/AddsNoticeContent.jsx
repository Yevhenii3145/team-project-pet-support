import SvgInsert from 'components/Svg/Svg';
import { useState } from 'react';
import scss from './modal-add-pet-pages.module.scss';

const AddsPetContent = ({ close }) => {
  const [stepOne, setStepOne] = useState(true);
  const [petCategory, setPetCategory] = useState("");
  const [petName, setPetName] = useState("");
  const [petTitle, setPetTitle] = useState("");
  const [petDate, setPetDate] = useState("");
  const [petBird, setPetBird] = useState("");
  const [currentRadioValue, setCurrentRadioValue] = useState("")
  const [petLocation, setPetLocation] = useState("")
  const [petPrice, setPetPrice] = useState("");
  const [imageURL, setImageURL] = useState(null)

  const changeStepOne = (e) => {
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
      case 'bird':
        setPetBird(e.currentTarget.value);
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
  }

  const changeStep = () => {
    return setStepOne(!stepOne);
  };

  const handleImageChange = (e) => {
    const reader = new FileReader()
    const image = e.target.files[0]
    reader.onloadend = () => {
      setImageURL(reader.result)
    }
    reader.readAsDataURL(image)
    return
  }

  const handleSubmitForStepOne = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { title, name, date, bird, location, price} = form.elements;
    setPetTitle(title.value);
    setPetName(name.value);
    setPetDate(date.value);
    setPetBird(bird.value);
    // setPetLocation(location.value);
    // setPetPrice(price.value);
    return changeStep();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { image, comments } = form.elements;
    const data = new FormData();
    data.append('title', petTitle);
    data.append('category', petCategory)
    data.append('name', petName);
    data.append('date', petDate);
    data.append('bird', petBird);
    data.append('gender', currentRadioValue);
    data.append('location', petLocation);
    data.append('price', petPrice);
    data.append('comments', comments.value);
    data.append('image', image.files[0]);
    setPetTitle("")
    setPetCategory("")
    setPetBird("")
    setPetDate("")
    setPetName("")
    setPetLocation("")
    setPetPrice("")
    setImageURL(null)
    return form.reset();
  };

  const handleRadioChangeCategory = (e) => {
    console.log("category", e.target.value)
    setPetCategory(e.target.value);
  };

  const handleRadioChange = (e) => {
    console.log("gender", e.target.value)
    setCurrentRadioValue(e.target.value);
  };

  return (
    <div className={scss.modalAdds_page}>
      <h3 className={scss.modalAdds_page__tittle}>Add pet</h3>
      {stepOne && (
        <>
          <p className={scss.modalAdds_descriptions}>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
          <div className={scss.buttonCont}>
            <label className={scss.button}>
              lost/found
              <input
                name="petCategory"
                value="lostFound"
                type="radio"
                className={scss.radioButtonInput}
                onChange={handleRadioChangeCategory}
              />
            </label>
            <label className={scss.button}>
              in good hands
              <input
                name="petCategory"
                value="inGoodHands"
                type="radio"
                className={scss.radioButtonInput}
                onChange={handleRadioChangeCategory}
              />
            </label>
            <label className={scss.button}>
              sell
              <input
                name="petCategory"
                value="sell"
                type="radio"
                className={scss.radioButtonInput}
                onChange={handleRadioChangeCategory}
              />
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
              name="bird"
              placeholder="Type breed"
              required
              value={petBird}
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
            <h2 className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}>The sex<span className={scss.star}>*</span>:</h2>
            <div className={scss.radioButtonSection}>
              <label className={scss.radioButton}>
                <SvgInsert id="icon-male" />
                Male
                <input
                  className={scss.radioButtonInput}
                  type="radio"
                  // checked={currentRadioValue}
                  defaultChecked=""
                  name="gender"
                  value="male"
                  onChange={handleRadioChange}
                />
              </label>
              <label className={scss.radioButton}>
                <SvgInsert id="icon-female" />
                Female
                <input
                  className={scss.radioButtonInput}
                  type="radio"
                  // checked={currentRadioValue}
                  name="gender"
                  value="female"
                  onChange={handleRadioChange}
                />
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
            placeholder="Type name pet"
            required
            value={petLocation}
            onChange={changeStepOne}
          />
          <label
            className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
          >
            Price<span className={scss.star}>*</span>:
          </label>
          <input
            className={scss.modalAdds_page__input}
            type="text"
            name="price"
            placeholder="Type date of birth"
            required
            value={petPrice}
            onChange={changeStepOne}
          />
          <div className={scss.add__pet__container}>
            <p className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}>
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
            {imageURL && <div className={scss.addspetPhoto__container}><p>You image:</p><img src={imageURL} alt="pet" /></div>}
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
