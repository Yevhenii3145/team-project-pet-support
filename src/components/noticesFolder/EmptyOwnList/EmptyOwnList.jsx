import cat from '../../../images/cat_for_empty_user_pets_list.svg'
import scss from './empty-own-list.module.scss'

export function EmptyOwnList() {
    return (
        <div className={scss.emptyPetsList_wrap}>
            <div className={scss.emptyPetsList_box}>
                <img className={scss.emptyPetsList_img} src={cat} alt="cat" />
                <p className={scss.emptyPetsList_text}>
                    You haven`t added any <br /> animals to your list yet
                </p>
            </div>
        </div>
    )
}
