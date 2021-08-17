import { useSelector, useDispatch } from 'react-redux';
import { filterItem } from '../../redux/actions/phoneBook';
import filterContacts from '../../helpers/FilterContacts';
// const contactsArray = filterContacts(contacts, value);
//   console.log(contactsArray);

function PhoneBookFilter() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);

  const getFilter = state => state.filter;

  // console.log(contacts);
  const value = useSelector(getFilter);
  // console.log(value);
  const change = event => {
    const value = event.target.value;

    // console.log(value);
    // console.log(filterContacts(contacts, value));
    dispatch(filterItem(value));
    const contactsArray = filterContacts(contacts, value);
    console.log(contactsArray);
    const contactsf = contactsArray;

    return contactsArray;
  };
  // useSelector(contactsArray)
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
