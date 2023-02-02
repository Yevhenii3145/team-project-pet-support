import scss from "./our-friends-page.module.scss";
import OurFriendsPageItem from "./OurFriendsPageItem/OurFriendsPageItem";
import items from "./sponsors.json";


const OurFriendsPage = () => {

    return (
        <div>
            <div className={`${scss.abc} ${scss.container}`}>
                <h1 className={scss.header}>Our friends</h1>
                <ul className={scss.ul}>
                    {items.map(item => (<OurFriendsPageItem
                        key={item.title}
                        title={item.title}
                        // day={2}
                        start={item.workDays?.[1].from || "------------"}
                        end={item.workDays?.[1].to || "-------------"}
                        adress={item.adress || "-------------------------"}
                        email={item.email || "-------------------------"}
                        phone={item.phone || "--------------------------"}
                        foto={item.imageUrl}

                    >
                    </OurFriendsPageItem>))
                    }
                </ul >
            </div>
        </div>
    )
}

export default OurFriendsPage;