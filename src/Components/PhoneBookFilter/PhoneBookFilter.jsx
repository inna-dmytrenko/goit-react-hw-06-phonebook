import { useSelector, useDispatch } from 'react-redux';
import { filterItem } from '../../redux/actions/filter';

function PhoneBookFilter() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);

  const getFilter = state => state.filter;

  const value = useSelector(getFilter);

  const change = event => {
    const value = event.target.value;
    const getFilter = dispatch(filterItem(value));
    console.log(getFilter);

    return getFilter;
  };
  function filterContacts(contacts) {
    // return contacts.filter(obj => {
    const x = contacts.map(contact => contact.name);
    console.log(x);
    // return contacts;
    // if (value.toLowerCase().includes(x.toLowerCase().trim())) {
    //   return 'ghhg';
    // }
    // });
  }
  console.log(contacts);
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
