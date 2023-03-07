import { useSearchParams } from "react-router-dom";
import scss from './load-more.module.scss';

const LoadMore = () => {

const [searchParams, setSearchParams] = useSearchParams();

const page = searchParams.get('page')
const limit = searchParams.get('limit')

    return (

        <button type="button" className={scss.buttonLoad} onClick={()=>setSearchParams({page: Number(page) + 1, limit})}>Load more...</button>

    )
}

export default LoadMore;