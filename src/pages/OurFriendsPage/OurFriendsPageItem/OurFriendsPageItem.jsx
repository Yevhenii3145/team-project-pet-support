import scss from "./OurFriendsPageItem.module.scss"

const OurFriendsPageItem = ({ title, day, start, end, adress, email, phone, foto }) => {
    return (
        <li className={scss.gg}>
            <h2>{title}</h2>
            {/* ${foto} */}
            <div className={scss.wrapper}>
                <div className={scss.zagluchay}>r</div>
                <div className="scss.qwe">
                    <div>
                        <p>Time:</p>
                        {start}-{end}
                    </div>
                    <div>
                        <p>Address:</p>
                        {adress}
                    </div>
                    <div>
                        <p>Email:</p>
                        {email}
                    </div>
                    <div>
                        <p>Phone:</p>
                        {phone}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default OurFriendsPageItem;