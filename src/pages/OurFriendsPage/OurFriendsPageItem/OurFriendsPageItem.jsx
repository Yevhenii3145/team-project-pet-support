import scss from "./OurFriendsPageItem.module.scss"

const OurFriendsPageItem = ({ title, day, start, end, adress, email, phone, foto }) => {
    return (
        <li className={scss.card_item}>
            <h2>{title}</h2>
            {/* ${foto} */}
            <div className={scss.wrapper}>

                <div className={scss.zagluchay}>
                    <img src={foto} alt={`foto of ${title}`} />
                </div>
                <div className="scss.qwe">
                    <div>
                        <p>Time:</p>
                        <span>{start}-{end}</span>

                    </div>
                    <div>
                        <p>Address:</p>
                        <span className={scss.underline}>{adress}</span>

                    </div>
                    <div>
                        <p>Email:</p>
                        <link rel="stylesheet" href="" />
                        <a href={`mailto: ${email}`}>{email}</a>

                    </div>
                    <div>
                        <p>Phone:</p>
                        <span>{phone}</span>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default OurFriendsPageItem;