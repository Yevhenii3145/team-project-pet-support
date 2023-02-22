import scss from './notices-category-list.module.scss';
import NoticeCategoryItem from 'components/noticesFolder/NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoryList = ({ pets, categoryNotices }) => {
  return (
    <ul className={scss.card_list}>
      {pets.map(pet => (
        <NoticeCategoryItem
          pet={pet}
          key={pet._id}
          categoryNotices={categoryNotices}
        />
      ))}
    </ul>
  );
};

export default NoticesCategoryList;
