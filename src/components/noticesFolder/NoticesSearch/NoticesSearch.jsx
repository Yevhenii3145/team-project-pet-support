import scss from './notices-search.module.scss';
import SvgInsert from 'components/utilsFolder/Svg/Svg';
import { getSearch } from '../../../redux/operations/noticesOperation';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useEffect } from 'react';

const NoticesSearch = () => {
  const {categoryName} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const pagination = useSelector(state=>state.notices.nameCategory[2])
  const limit = 8;
  const dispatch = useDispatch();
  const value = searchParams.get('keyword');

  useEffect(()=> {
if(pagination > 1 && value) {
  const data = {
    value,
    categoryName,
    page: pagination,
    limit
  }
  dispatch(getSearch(data))
}

  }, [pagination, dispatch, categoryName, value])

  const getSearchWord = async(value) => {
      if(!value) {
        Notify.failure('You need to enter something', 
      { distance: '100px',
        opacity: '0.8',
        useIcon: false,
        fontSize: '18px',
        borderRadius: '20px',
        showOnlyTheLastOne: true});
        return
      }
      const data = {
        value,
        categoryName,
        page: pagination,
        limit
      }
     await dispatch(getSearch(data))
  }

return(
  <div className={scss.wrapperSearch}>
  <input className={scss.searchInput} type="text" placeholder="Search" name="search" onChange={e=> setSearchParams({keyword: e.currentTarget.value})} value={value === null ? '' : value}/>
  <button type="button" className={scss.get_searct_btn} onClick={()=>getSearchWord(value)}>
    <SvgInsert id="icon-search" />
  </button>
  </div>
)





//   const [search, setSearch] = useState('');
//   const [searchBtn, setSearchBtn] = useState(true);
//   const [activeInput, setActiveInput] = useState(false);
//   const {categoryName} = useParams();
//   const [page] = useState(1);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const limit = 8;
//   const dispatch = useDispatch();

//   const value = searchParams.get('keyword')

//   useEffect(() => {
// if(!activeInput) {
//   setSearchParams({})
// }
//   }, [activeInput, setSearchParams])

//   const handleChange = e => {
//     setSearch(e.currentTarget.value);
//     dispatch(filterNotice(e.currentTarget.value));
//     setSearchParams({keyword: e.currentTarget.value})
//     const data = {
//       value: value ===  null ? '' : value,
//       categoryName,
//       page,
//       limit
//     }
//     dispatch(getSearch(data));
//   };

//   const btnGetSearch = search => {
//     const data = {
//       value: value ===  null ? '' : value,
//       categoryName,
//       page,
//       limit
//     }
//     setActiveInput(true);
//     dispatch(getSearch(data));
//     dispatch(filterNotice(value))
//   };

//   return (
//     <div className={scss.search}>
//       {activeInput ? 
//             <input
//             className={scss.searchInput}
//             type="text"
//             placeholder="Search"
//             name="search"
//             onChange={handleChange}
//             value={search}
//           /> :
//           <input
//           className={scss.searchInput}
//           type="text"
//           placeholder="Search"
//           name="search"
//           onChange={handleChange}
//           value={search}
//           disabled
//         />
//     }
//     {search === '' ?
//     <>
//     {
//       searchBtn ? 
//       <button
//       type="button"
//       className={scss.get_searct_btn}
//       onClick={() => {btnGetSearch(search)
//       setSearchBtn(false)}}
//     >
//       <SvgInsert id="icon-search" />
//     </button> : <button
//     type="button"
//     className={scss.get_searct_btn}
//     onClick={() => {dispatch(filterNotice(null))
//     setActiveInput(false)
//     setSearchBtn(true)}}
//   >
//     <SvgInsert id="icon-search-exit" />
//   </button>
//     }
//     </>
//      :
//             <button
//             type="button"
//             className={scss.get_searct_btn}
//             onClick={() => {
//               setSearch('')
//               dispatch(filterNotice(''))
//             }}
//           >
//             <SvgInsert id="icon-close" />
//           </button>  
//   }
//     </div>
//   );
};

export default NoticesSearch;
