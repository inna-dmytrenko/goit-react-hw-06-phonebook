import { useSelector, useDispatch } from 'react-redux';
import { filterItem } from '../../redux/actions/phoneBook';
import filterContacts from '../../helpers/FilterContacts';
// const contactsArray = filterContacts(contacts, value);
//   console.log(contactsArray);

function PhoneBookFilter() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);

  const getFilter = state => state.filter;

  const value = useSelector(getFilter);

  const change = event => {
    const value = event.target.value;

    // console.log(value);
    // console.log(filterContacts(contacts, value));
    const contactsArray = filterContacts(contacts, value);
    console.log(contactsArray);
    dispatch(filterItem(value));
    return contactsArray;
  };
  // const contactsArray = filterContacts(contacts, value);

  // function filterContacts(contacts, value) {
  //   console.log(value);
  //   return contacts.filter(obj => {
  //     return obj.name.toLowerCase().includes(value.toLowerCase().trim());
  //   });
  // }

  return (
    <div>
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
      {/* <ul>
        <li>name</li>
        <li>tel</li>
      </ul> */}
    </div>
  );
}

export default PhoneBookFilter;
