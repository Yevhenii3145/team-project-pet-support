import cat from '../../../images/cat_for_empty_favorite_list.svg'
import scss from './empty-favorite-list.module.scss'

export function EmptyFavoriteList() {
    return (
        <div className={scss.emptyPetsList_wrap}>
            <div className={scss.emptyPetsList_box}>
                <img className={scss.emptyPetsList_img} src={cat} alt="cat" />
                <p className={scss.emptyPetsList_text}>
                    Add your favorite animals <br /> so as not to lose
                </p>
            </div>
        </div>
    )
}
