import scss from "./modal-add-pet-pages.module.scss";

export function ModalAddPetPageTwo() {
    return (
        <div>
            <h3 className={scss.modalAdds_page__tittle}>Add pet</h3>
            <div className={scss.modalAdds_page_box}>
                    <label className={scss.modalAdds_page__label} >location</label>
                    <input className={scss.modalAdds_page__input} type="text" name='location' placeholder="Type name pet" />
                </div>
            <div className={scss.modalAdds_page_box}>
                    <label className={scss.modalAdds_page__label} >Price</label>
                    <input className={scss.modalAdds_page__input} type="text" name='price' placeholder="Type date of birth" />
                </div>
            <p className={scss.modalAdds_page__field}>Add photo and some comments</p>
            <img className={scss.modalAdds_page__photoBox} src="https://dummyimage.com/208x208/FDF7F2.gif&text=Photo+your+pet!" alt="" />
            <div className={scss.modalAdds_commit_box}>
                <label className={scss.modalAdds_page__label}>Comments</label>
                <textarea className={scss.modalAdds_commit}  type="text" name='comments' placeholder="Type comments"/>
            </div>


        </div>
)
}
