import cat from '../../../images/cat_for_empty_user_pets_list.svg'
import scss from './empty-pets-list.module.scss'

export function EmptyPetsList() {
    return (
        <div className={scss.emptyPetsList_box}>
            <img className={scss.emptyPetsList_img} src={cat} alt="cat" />
            <p className={scss.emptyPetsList_text}>
                You haven`t added any <br /> animals to your list yet
            </p>
        </div>
    )
}
