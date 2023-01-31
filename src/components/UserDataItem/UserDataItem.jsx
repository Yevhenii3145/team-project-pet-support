
import scss from "./user-data-item.module.scss";

export default function UserDataItem() {

    // const user = useSelector(getUser);
    // const dispatch = useDispatch();
    
    
       const handelSabmit = (event) => {
           event.preventDefault();
           const { UserPhoto } = this.elements;
           const data = new FormData();
           data.append("UserPhoto", UserPhoto.files[0]);
        // onAddContact({ name, number });
        // setName((name) => name = '');
        // setNumber((number) => number = '');
        }
    
    return (
        <div className={scss.userItem_container}>
            <img className={scss.userItem__yourPhoto} src="https://dummyimage.com/150x150/FDF7F2.gif&text=You+photo!" alt="" />
            <form onSubmit={handelSabmit}  enctype="multipart/form-data">
                <div>
                    <input type="file" name="UserPhoto"/>
                </div>
                <div className={scss.userItem_box_btnPhoto}>
                    <button className={scss.userItem_button} type='button'>Edit photo</button>
                </div>
            </form>
            <div className={scss.userItem_box_text}>
                <p className={scss.userItem_field}>Name:    Name</p>
                <p className={scss.userItem_field}>Email:    Email</p>
                <p className={scss.userItem_field}>Birthday:    Birthday</p>
                <p className={scss.userItem_field}>Phone:    Phone</p>
                <p className={scss.userItem_field}>City:    City</p>
            </div>
       </div>
    )
    
    // const elements = contacts.map(({ name, number, id }) => {
    //     return <li className={css.listItem} key={id}>{name}: {number}
    //         <span className={css.deleteItem} onClick={() => onDeleteContact(id)}>Delete</span></li>
    // })
    //     return (
    //        <>
    //         <ol>{elements}</ol>
    //     </>
    //     )
}

// export default UserDataItem 



// ContactsItem.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     }))
// }

