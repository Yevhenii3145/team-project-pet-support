import scss from './load-more.module.scss';
import { Element} from 'react-scroll';

const LoadMore = ({scroll, changePage}) => {

    return (
        <div onClick={()=>scroll()}>
        <button type="button" className={scss.buttonLoad} 
                onClick={()=> changePage(prev => prev += 1)}>
                Load more...</button>
        <Element className="element" name="scroll-to-element" />
        </div>
    )
}

export default LoadMore;