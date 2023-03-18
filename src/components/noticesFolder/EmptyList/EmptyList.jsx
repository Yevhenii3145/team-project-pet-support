import cat from '../../../images/cat_for_empty_user_pets_list.svg'
import scss from '../EmptyFavoriteList/empty-favorite-list.module.scss'

export function EmptyList() {
    return (
        <div className={scss.emptyPetsList_wrap}>
            <div className={scss.emptyPetsList_box}>
                <img className={scss.emptyPetsList_img} src={cat} alt="cat" />
                <p className={scss.emptyPetsList_text}>
                    This category is empty now 
                </p>
            </div>
        </div>
    )
}