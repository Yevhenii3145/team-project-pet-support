import scss from "./noticesCategories.module.scss"

const NoticesCategories = () => {

  return (
    <div className={scss.buttonCont}>
      <button className={scss.button}>lost/found</button>
      <button className={scss.button}>in good hands</button>
      <button className={scss.button}>sell</button>
    </div>
  )
}

export default NoticesCategories;
