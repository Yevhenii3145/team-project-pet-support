import PropTypes from 'prop-types';
import s from './newsFilter.module.scss';
// import { SlClose } from 'react-icons/sl';
import SvgInsert from 'components/Svg/Svg';
// import { useState, useEffect } from 'react';

export default function NewsFilter({
  input,
  onChange,
  resetInput,
  inputValue,
}) {
  //   const [inputTrue, setinputTrue] = useState(false);

  //   useEffect(() => {
  //     !input.lenght === '' ? setinputTrue(true) : setinputTrue(false);
  //   }, [input.lenght]);
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
