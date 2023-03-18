import scss from './load-more.module.scss';
import { Element} from 'react-scroll';
import { useSearchParams } from 'react-router-dom';

const LoadMore = ({scroll, changePage, filterPage}) => {

    const [searchParams] = useSearchParams();
    const value = searchParams.get('keyword');

    return (
        <div onClick={()=>scroll()}>
        <button type="button" className={scss.buttonLoad} 
                onClick={()=> {
                    if(!value) {
                        changePage(prev => prev += 1)
                    } else filterPage(prev=> prev + 1)
                }}>
                Load more...</button>
        <Element className="element" name="scroll-to-element" />
        </div>
    )
}

export default LoadMore;