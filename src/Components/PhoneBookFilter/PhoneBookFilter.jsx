import { useSelector, useDispatch } from 'react-redux';
import { filterItem } from '../../redux/actions/filter';

function PhoneBookFilter() {
  const dispatch = useDispatch();
  // const getContacts = state => state.contacts.items;
  const getFilter = state => state.filter;
  // const value = event.target.value;
  const value = useSelector(getFilter);

  // export const getFilter = state => state.contacts.filter;

  // const getContacts = state => state.filter;
  //  const contacts = useSelector(getContacts);
  // console.log(getFilter())

  const change = event => {
    const value = event.target.value;
    const getFilter = dispatch(filterItem(value));
    console.log(getFilter.name);

    // if (value === getFilter.payload) {
    //   console.log(getFilter)
    // }
    // console.log("value" , value)
    // console.log("getFilter" , getFilter.payload)
    return getFilter;
  };
  return (
    <label>
      <p>Filter contacts by name: </p>
      <input
        name="filter"
        onChange={change}
        type="text"
        value={value}
        placeholder="Name"
      />
    </label>
  );
}

export default PhoneBookFilter;
