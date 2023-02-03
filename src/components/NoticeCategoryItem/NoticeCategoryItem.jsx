import scss from "./notice-category-item.module.scss";
import noticeImage1 from "images/cat1.webp";

import SvgInsert from "components/Svg/Svg";

const NoticeCategoryItem = (pet) => {

    const { petBreed, petLocation, petDateOfBirth, petPrice } = pet.pet;

    return (
        <>
            <li className={scss.card_item} >
                <img src={noticeImage1} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: {petBreed}</li>
                        <li className={scss.card_info_item}>Place: {petLocation}</li>
                        <li className={scss.card_info_item}>Age: {petDateOfBirth}</li>
                        <li className={scss.card_info_item}>Price: {petPrice}$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart" />
                    </button>
                    <button type="button" className={scss.learn_more_btn} >Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            {/* <li className={scss.card_item}>
                <img src={noticeImage2} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage3} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage1} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage2} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage3} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage1} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li>

            <li className={scss.card_item}>
                <img src={noticeImage2} alt="pet" className={scss.card_img} />
                <div className={scss.card_info}>
                    <h3 className={scss.card_info_title}>Сute dog looking for a home</h3>
                    <ul className={scss.card_info_list}>
                        <li className={scss.card_info_item}>Breed: Pomeranian</li>
                        <li className={scss.card_info_item}>Place: Lviv</li>
                        <li className={scss.card_info_item}>Age: one year</li>
                        <li className={scss.card_info_item}>Price: 50$</li>
                    </ul>
                    <button type="button" className={scss.add_to_favorite_btn}>
                        <SvgInsert id="icon-heart"/>
                    </button>
                    <button type="button" className={scss.learn_more_btn}>Learn more</button>
                    <p className={scss.card_text}>Sell</p>
                </div>
            </li> */}
        </>
    )
}

export default NoticeCategoryItem;