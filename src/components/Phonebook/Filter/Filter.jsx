import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Start to type"
        value={filter}
        onChange={evt => {
          dispatch(setFilter(evt.target.value));
        }}
      />
    </div>
  );
};
