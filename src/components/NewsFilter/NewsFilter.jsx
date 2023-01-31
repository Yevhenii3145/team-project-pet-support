import PropTypes from 'prop-types';
import s from './newsFilter.module.scss';
import { SlClose } from 'react-icons/sl';
// import { useState, useEffect } from 'react';

export default function NewsFilter({ input, onChange, resetInput, inputTrue }) {
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
        onChange={onChange}
        value={input}
      />
      {!inputTrue && (
        <SlClose
          size={20}
          onClick={() => resetInput()}
          className={s.search_reset}
        />
      )}
    </div>
  );
}

NewsFilter.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
