
import scss from "./user-data-item.module.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { async } from "q";
// import { create } from "lodash";

export default function UserDataItem() {

    // const user = useSelector(getUser);
    // const dispatch = useDispatch();
    
    
       const handelSabmit = (event) => {
           event.preventDefault();
           const { UserPhoto } = this.elements;
           console.log(UserPhoto.value);
           const data = new FormData();
           data.append("UserPhoto", UserPhoto.files[0]);
        // onAddContact({ name, number });
        // setName((name) => name = '');
        // setNumber((number) => number = '');
    }
    
    const onClick = () => {
        console.log('sdfgh');
        
        }
    
    return (
        <div className={scss.userItem_container}>
            <img className={scss.userItem__yourPhoto} src="https://dummyimage.com/150x150/FDF7F2.gif&text=You+photo!" alt="" />
            <div className={scss.userItem_box_btnPhoto}>
                <button className={scss.userItem_button} type="button" onClick={onClick}>Edit photo</button>
                {onClick
                    ? <form onSubmit={handelSabmit} style={{ opacity: '0' }} enctype="multipart/form-data">
                        <div>
                            <input type="file" name="UserPhoto" />
                        </div>
                    </form>
                    :<form onSubmit={handelSabmit} style={{ opacity: '1' }} enctype="multipart/form-data">
                        <div>
                            <input type="file" name="UserPhoto" />
                        </div>
                    </form> }
            </div>
            <form onSubmit={handelSabmit}  enctype="multipart/form-data">
                <div>
                    <input type="file" name="UserPhoto"/>
                </div>
                <div className={scss.userItem_box_btnPhoto}>
                    <button className={scss.userItem_button} type='button'>Edit photo</button>
                </div>
            </form>

                <Formik
                    initialValues={{ name: 'Elena', }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                        errors.name = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.name = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        </Form>
                    )}
            </Formik>
            
            <div className={scss.userItem_box_text}>
                             <Formik
       initialValues={{ name: '', email: '', birthday: '', phone: '', city: ''}}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.тфьу)
         ) {
           errors.name = 'The name must have more than two characters';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
            <Form>
                            <div className={scss.form_box}>


                <label>Name:</label>
                <Field type="name" name="name" placeholder="Name" className={scss.register__input}/>
                <ErrorMessage name="name" component="div" />
                <button type="submit" disabled={isSubmitting}>Submit</button><br/>            
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <label>Email:</label>
           <Field type="email" name="email" placeholder="Email" className={scss.register__input}/>
           <ErrorMessage name="Email" component="div" />
           <button type="submit" disabled={isSubmitting}>Submit</button>
           </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <label>Birthday:</label>
                <Field type="data" name="data" placeholder="Birthday" className={scss.register__input}/>
                <ErrorMessage name="data" component="div" />
                <button type="submit" disabled={isSubmitting}>Submit</button>           
           </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <label>Phone:</label>
            <Field type="number" name="phone" placeholder="Phone" className={scss.register__input}/>
           <ErrorMessage name="phone" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
            </button>           
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                 <label>City:</label>
                <Field type="text" name="name" placeholder="City" className={scss.register__input}/>
                <ErrorMessage name="City" component="div" />
                <button type="submit" disabled={isSubmitting}>Submit</button>           
            </div>
            </Form>   
       )}
     </Formik>
</div>
            {/* <div className={scss.userItem_box_text}>
                <p className={scss.userItem_field}>Name:    Name</p>
                <p className={scss.userItem_field}>Email:    Email</p>
                <p className={scss.userItem_field}>Birthday:    Birthday</p>
                <p className={scss.userItem_field}>Phone:    Phone</p>
                <p className={scss.userItem_field}>City:    City</p>
            </div> */}
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



// ContactsItem.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     }))
// }

