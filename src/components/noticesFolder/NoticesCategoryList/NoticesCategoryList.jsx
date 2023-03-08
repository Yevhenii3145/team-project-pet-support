import scss from './notices-category-list.module.scss';
import NoticeCategoryItem from 'components/noticesFolder/NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoryList = ({ pets}) => {

  return (
    <ul className={scss.card_list}>
      {pets.map(pet => (
        <NoticeCategoryItem
          pet={pet}
          key={pet._id}
        />
      ))}
    </ul>
  );
};

export default NoticesCategoryList;
