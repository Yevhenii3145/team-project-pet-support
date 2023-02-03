import { useEffect, useState } from "react";
import axios from "axios";

import scss from "./notices-categories-list.module.scss";
import NoticesCategoryList from "components/NoticesCategoryList/NoticesCategoryList";

const NoticesCategoriesList = () => {

    const [pets, setPets] = useState([]);

    console.log(pets)

    useEffect(() => {
        const fetchPets = async () => {
            const result = await axios.get('http://localhost:4001/api/notices/sell');
            setPets(result.data.notices);
        }
        fetchPets();
    }, [])

    return (
        <>
            {pets.length > 0 && <NoticesCategoryList pets={pets} />}
        </>
    )
}

export default NoticesCategoriesList;