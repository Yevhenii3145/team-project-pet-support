import scss from './shared-layout.module.scss';
import base from '../../../helpers/container.module.scss';
import love from '../../../images/heart-desktop.svg';

const SharedLayout = () => {

  return (
    <>
      <div className={scss.background}>
        <div className={base.container}>
          <div className={scss.wrapperHome}>
            <h1 className={scss.title}>Take good care of your small pets</h1>
            <div className={scss.image}>
              <img src={love} alt="heart" className={scss.heartIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
