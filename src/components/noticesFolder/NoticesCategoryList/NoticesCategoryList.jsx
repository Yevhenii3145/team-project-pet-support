import scss from './notices-category-list.module.scss';
import NoticeCategoryItem from 'components/noticesFolder/NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoryList = ({ pets, data}) => {
 
  return (
    <ul className={scss.card_list}>
      {pets.map(pet => (
        <NoticeCategoryItem
          pet={pet}
          key={pet._id}
          value={data}
        />
      ))}
    </ul>
  );
};

export default NoticesCategoryList;
