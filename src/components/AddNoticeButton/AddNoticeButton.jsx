import SvgInsert from 'components/Svg/Svg';
import scss from './add-notice-button.module.scss';

const AddNoticeButton = () => {

    return (
        <div className={scss.cont}>
        <button className={scss.button}>
        <SvgInsert id="icon-add-pet"/>
        Add pet
        </button>
        </div>
    )
}

export default AddNoticeButton;
