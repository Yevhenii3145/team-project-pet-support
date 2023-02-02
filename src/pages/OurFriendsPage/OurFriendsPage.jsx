import scss from "./our-friends-page.module.scss";
import OurFriendsPageItem from "./OurFriendsPageItem/OurFriendsPageItem";
import items from "./sponsors.json";


const OurFriendsPage = () => {

    return (
        <div className={scss.abc} className={ }>
            <h1 className={scss.header}>Our friends</h1>
            <ul className={scss.ul}>
                {items.map(item => (<OurFriendsPageItem
                    key={item.title}
                    title={item.title}
                    // day={2}
                    start={item.workDays?.[1].from || "-------"}
                    end={item.workDays?.[1].to || "------"}
                    adress={item.adress || "--------------"}
                    email={item.email || "--------------"}
                    phone={item.phone || "--------------"}
                // foto={foto}

                >
                </OurFriendsPageItem>))
                }
            </ul >
        </div>
    )
}

export default OurFriendsPage;