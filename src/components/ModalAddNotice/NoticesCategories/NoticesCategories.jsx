import scss from "./noticesCategories.module.scss"

const NoticesCategories = () => {

  return (
    <div className={scss.buttonCont}>
      <label className={scss.button}>
        lost/found
        <input
          name="category"
          value="lostFound"
          type="radio"
          className={scss.radioButtonInput} />
      </label>
      <label className={scss.button}>
        in good hands
        <input
          name="category"
          value="inGoodHands"
          type="radio"
          className={scss.radioButtonInput} />
      </label>
      <label className={scss.button}>
        sell
        <input
          name="category"
          value="sell"
          type="radio"
          className={scss.radioButtonInput} />
      </label>
    </div>
  )
}

export default NoticesCategories;
