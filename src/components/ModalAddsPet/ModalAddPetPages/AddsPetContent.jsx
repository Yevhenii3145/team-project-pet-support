import { useState } from 'react';
import scss from './modal-add-pet-pages.module.scss';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const schemasForStepFirst = Yup.object().shape({
//   name: Yup.string(),
//   date: Yup.date(),
//   bird: Yup.string(),
// });

// const schemasForStepSecond = Yup.object().shape({
//   image: Yup.string().required(),
//   comments: Yup.string().required(),
// });

const AddsPetContent = ({ close }) => {
  // const [modalActive, setModalActive] = useState(true);
  const [stepOne, setStepOne] = useState(true);
  const [pet, setPet] = useState({});
//   const [imageURL, setImageURL] = useState(null)
//   console.log(imageURL)


  // const initialValue = {
  //   name: '',
  //   date: '',
  //   bird: '',
  //   image: '',
  //   comments: '',
  // };

  const changeStep = () => {
    return setStepOne(!stepOne);
  };

  const handleSubmitForStepOne = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const {name, date, bird} = form.elements;
    const dataFirst = {
      name: name.value,
      date: date.value,
      bird: bird.value,
    }
    setPet(dataFirst)
    console.log(dataFirst)
    return changeStep()
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.currentTarget;
    const {image, comments} = form.elements;
    // const {name, date, bird, image, comments} = form.elements;
    // const login = form.elements.login.value;

    // console.log(title.value);
    // console.log(author.value);
    // console.log(cover.files);

    const data = new FormData();
    data.append("name", pet.name);
    data.append("date", pet.date);
    data.append("bird", pet.bird);
    data.append("comments", comments.value);
    data.append("image", image.files[0]);
    console.log(pet.name, pet.date, pet.bird, comments.value, image.files[0])
    return form.reset()
  }

  // const handleSubmit = (values, actions) => {
  //   if (stepOne) {
  //     setStepOne(false);
  //     setPet(values);
  //     return console.log(values);
  //   }
  //   if (!stepOne) {
  //     const petInfo = {
  //       name: pet.name,
  //       date: pet.date,
  //       bird: pet.bird,
  //       image: values.image,
  //       comments: values.comments,
  //     };
  //     console.log(petInfo);
  //     actions.resetForm();
  //     return setStepOne(true);
  //   }
  // };

//   const handleImageChange = (e) => {
//     console.log(e.target.files[0])
//     const reader = new FileReader()
//     const image = e.target.files[0]
//     reader.onloadend = () =>{
//         setImageURL(reader.result)
//     }
//     reader.readAsDataURL(image)

//     // const fileName = e.target.value.split(' ');
//     // console.log(fileName)
//     // setPetPhoto(true)
//     // setPetPhotoName(e.target.value)
//   }

  return (
    <div className={scss.modalAdds_page}>
      <h3 className={scss.modalAdds_page__tittle}>Add pet</h3>
        {stepOne &&
        <form onSubmit={handleSubmitForStepOne}>
        <label className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}>Name pet</label>
        <input className={scss.modalAdds_page__input} name="name" placeholder="Type name pet" type="text" required/>
        <label className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}>Data of birth</label>
        <input className={scss.modalAdds_page__input} name="date" type="text" placeholder="Type date of birth" required/>
        <label className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}>Breed</label>
        <input className={scss.modalAdds_page__input} type="text" name="bird" placeholder="Type bird" required/>
        <div className={scss.addPet__button}>
        <button className={`${scss.button__primary_main} ${scss.modalAdds_page__button}`} type="submit">Next</button>
        <span className={`${scss.button__primary_not_main} ${scss.modalAdds_page__button}`} onClick={close}>Cansel</span>
        </div>
        </form>
        }
        {!stepOne &&
        <form action="" id="book-add-form" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className={scss.add__pet__container}>
                <p className={scss.modalAdds_page__field}>Add photo and some comments</p>
              
                <input className={scss.addspet__imgInput} type="file" name="image" accept="image/png, image/jpeg, image/jpg, image/webp" id="img" required multiple/>
                <label className={scss.addspet__imgLabel} htmlFor="img"></label>
                
              
                <label className={`${scss.modalAdds_page__label} ${scss.modalAdds_commit_box}`}>Comments</label>
                <textarea className={scss.modalAdds_commit} type="text" name="comments" placeholder="Type comments" required/>
                
                <div className={scss.addPet__button}>
                <button className={`${scss.button__primary_main} ${scss.modalAdds_page__button}`} type="submit">Done</button>
                <span className={`${scss.button__primary_not_main} ${scss.modalAdds_page__button}`} onClick={changeStep}>Back</span>
                </div>
                </div>
          </form>
        }


      {/* <img src={`${imageURL}`} alt="pet" /> */}
      {/* {stepOne && (
        <>
          <Formik
            validationSchema={schemasForStepFirst}
            initialValues={initialValue}
            onSubmit={handleSubmit}
          >
            <Form autoComplete="off">
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Name pet
              </label>
              <Field
                className={scss.modalAdds_page__input}
                type="text"
                name="name"
                placeholder="Type name pet"
              />
              <ErrorMessage
                name="name"
                render={msg => Notify.warning(`${msg}`)}
              />
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Data of birth
              </label>
              <Field
                className={scss.modalAdds_page__input}
                type="text"
                name="date"
                placeholder="Type date of birth"
              />
              <ErrorMessage
                name="date"
                render={msg => Notify.warning(`${msg}`)}
              />
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_page_box}`}
              >
                Breed
              </label>
              <Field
                className={scss.modalAdds_page__input}
                type="text"
                name="bird"
                placeholder="Type bird"
              />
              <ErrorMessage
                name="bird"
                render={msg => Notify.warning(`${msg}`)}
              />
              <div className={scss.addPet__button}>

              </div>
            </Form>
          </Formik>
        </>
      )}
      {!stepOne && (
        <>
          <Formik
            validationSchema={schemasForStepSecond}
            initialValues={initialValue}
            onSubmit={handleSubmit}
          >
            <Form
              className={scss.add__pet__container}
              encType="multipart/form-data"
            >
              <p className={scss.modalAdds_page__field}>
                Add photo and some comments
              </p>
              <Field
                className={scss.addspet__imgInput}
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                name="image"
                id="img"
                // onChange={handleImageChange}
              />
              <label className={scss.addspet__imgLabel} htmlFor="img"></label>
              <label
                className={`${scss.modalAdds_page__label} ${scss.modalAdds_commit_box}`}
              >
                Comments
              </label>
              <Field
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
                  type="button"
                  onClick={changeStep}
                >
                  Back
                </span>
              </div>
            </Form>
          </Formik>
        </>
      )} */}

      {/* <form>
                <div className={scss.modalAdds_page_box}>
                    <label className={scss.modalAdds_page__label} >Name pet</label>
                    <input className={scss.modalAdds_page__input} type="text" name='name' placeholder="Type name pet"/>
                </div>
                <div className={scss.modalAdds_page_box}>
                    <label className={scss.modalAdds_page__label} >Data of birth</label>
                    <input className={scss.modalAdds_page__input} type="email" name='data' placeholder="Type date of birth"/>   
                </div>
                <div className={scss.modalAdds_page_box}>
                    <label className={scss.modalAdds_page__label} >Breed</label>
                    <input className={scss.modalAdds_page__input} type="text" name='breed' placeholder="Type bird" />
                </div>
            </form>
            <div>
            <h3 className={scss.modalAdds_page__tittle}>Add pet</h3>
            

            
        </div> */}
    </div>
  );
};
export default AddsPetContent;
