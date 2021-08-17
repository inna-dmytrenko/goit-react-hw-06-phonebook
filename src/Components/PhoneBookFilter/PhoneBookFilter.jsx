import { useSelector, useDispatch } from 'react-redux';
import { filterItem } from '../../redux/actions/filter';
// import { filterItem } from '../../redux/slices/phoneBook';
import { Input, Label, Para } from './PhoneBookFilter.styled';

function PhoneBookFilter() {
  const dispatch = useDispatch();

  const getFilter = state => state.filter;

  const value = useSelector(getFilter);

  const change = event => {
    const value = event.target.value;

    dispatch(filterItem(value));
  };

  return (
    <div>
      <Label>
        <Para>Filter contacts by name: </Para>
        <Input
          name="filter"
          onChange={change}
          type="text"
          value={value}
          placeholder="Name"
        />
      </Label>
    </div>
  );
}

export default PhoneBookFilter;
