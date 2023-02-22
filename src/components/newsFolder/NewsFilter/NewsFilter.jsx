import PropTypes from 'prop-types';
import s from './newsFilter.module.scss';
import SvgInsert from 'components/utilsFolder/Svg/Svg';

export default function NewsFilter({
  input,
  onChange,
  resetInput,
  inputValue,
}) {
  return (
    <div className={s.search}>
      <input
        className={s.search_input}
        type="text"
        placeholder="Search"
        name="filter"
        onInput={onChange}
        value={input}
      />
      {inputValue && (
        <div onClick={() => resetInput()}>
          <SvgInsert id="icon-reset-search" />
        </div>
      )}
      {!inputValue && <SvgInsert id="icon-search-news" />}
    </div>
  );
}

NewsFilter.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
