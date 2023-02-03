import { useState } from 'react';
import scss from './modal-add-pet-pages.module.scss';
const AddsPetContent = ({ close }) => {
  const [stepOne, setStepOne] = useState(true);
  // const [pet, setPet] = useState({name: '', date: '', bird: ''});
  const [petName, setPetName] = useState("");
  const [petDate, setPetDate] = useState("");
  const [petBird, setPetBird] = useState("");
  const [imageURL, setImageURL] = useState(null)

  const changeStepOne = (e) =>{
    switch (e.currentTarget.name) {
      case 'name':
        setPetName(e.currentTarget.value);
        break;

      case 'date':
        setPetDate(e.currentTarget.value);
        break;

      case 'bird':
        setPetBird(e.currentTarget.value);
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
    reader.onloadend = () =>{
        setImageURL(reader.result)
    }
    reader.readAsDataURL(image)
    return
    // const fileName = e.target.value.split(' ');
    // console.log(fileName)
    // setPetPhoto(true)
    // setPetPhotoName(e.target.value)
  }

  const handleSubmitForStepOne = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, date, bird } = form.elements;
    setPetName(name.value)
    setPetDate(date.value)
    setPetBird(bird.value);
    console.log(petName, petBird, petDate);
    return changeStep();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { image, comments } = form.elements;
    const data = new FormData();
    data.append('name', petName);
    data.append('date', petDate);
    data.append('bird', petBird);
    data.append('comments', comments.value);
    data.append('image', image.files[0]);
    console.log(petName, petDate, petBird, comments.value, image.files[0]);
    setPetBird("")
    setPetDate("")
    setPetName("")
    setImageURL(null)
    return form.reset();
  };

  return (
    <div className={scss.modalAdds_page}>
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
            placeholder="Type bird"
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
              Cansel
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
              placeholder="Type comments"
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
