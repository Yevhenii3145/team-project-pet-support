import scss from "./notice-category-item.module.scss";
import noticeImage from "images/dog1.webp";
import heartSvg from "images/symbol-defs.svg#icon-edit";

const NoticeCategoryItem = () => {

    return (
        <ul className={scss.card_list}>
            <li className={scss.card_item}>
                <img src={noticeImage} alt="pet" width="280" />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <svg width="24" height="22">
                            <use href={heartSvg}></use>
                        </svg>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            
        </ul>
    )
}

export default NoticeCategoryItem;