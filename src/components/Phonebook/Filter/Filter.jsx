import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <TextField
      margin="normal"
      fullWidth
      type="text"
      id="filter"
      label="Find contacts by name"
      placeholder="Start to type"
      value={filter}
      onChange={evt => {
        dispatch(setFilter(evt.target.value));
      }}
    />
  );
};
