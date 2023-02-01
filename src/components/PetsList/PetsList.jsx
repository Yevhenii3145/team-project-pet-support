import scss from "./pets-list.module.scss";



export function PetsList() {
     
    // const elements = pets.map(({  id }) => {
    //     return <li className={css.listItem} key={id}>{name}: {number}
    //         <span className={css.deleteItem} onClick={() => onDeleteContact(id)}>Delete</span></li>
    // })
    //     return (
    //        <>
    //         <ol>{elements}</ol>
    //     </>
    //     )

    return (
        <div className={scss.petsList_box} >
            <img className={scss.petsList_photo} src="https://dummyimage.com/240x240/FDF7F2.gif&text=Photo+your+pet!" alt="" />
            <div className={scss.petsList_text_box}>
                <p className={scss.petsList_field}>Name: namePet</p>
                <p className={scss.petsList_field}>Birthday:    Birthday</p>
                <p className={scss.petsList_field}>Breed:    petBreed</p>
                <p className={scss.petsList_field}>Comments:</p>
                <div className={scss.petsList_boxBtn} >
                    <button className={scss.petsList_button} type='button'>X</button>
                </div>
            </div>
        </div>
    )
}
