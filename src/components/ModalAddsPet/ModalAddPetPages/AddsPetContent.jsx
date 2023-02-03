import { useState } from 'react';
import scss from './modal-add-pet-pages.module.scss';
const AddsPetContent = ({ close }) => {
  const [stepOne, setStepOne] = useState(true);
  const [pet, setPet] = useState({});

  const changeStep = () => {
    return setStepOne(!stepOne);
  };

  const handleSubmitForStepOne = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, date, bird } = form.elements;
    const dataFirst = {
      name: name.value,
      date: date.value,
      bird: bird.value,
    };
    setPet(dataFirst);
    console.log(dataFirst);
    return changeStep();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { image, comments } = form.elements;
    const data = new FormData();
    data.append('name', pet.name);
    data.append('date', pet.date);
    data.append('bird', pet.bird);
    data.append('comments', comments.value);
    data.append('image', image.files[0]);
    console.log(pet.name, pet.date, pet.bird, comments.value, image.files[0]);
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
            />
            <label className={scss.addspet__imgLabel} htmlFor="img"></label>

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
