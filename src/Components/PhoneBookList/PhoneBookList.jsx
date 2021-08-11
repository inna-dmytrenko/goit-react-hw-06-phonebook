import {
  useSelector,
  // , useDispatch
} from 'react-redux';
import PhoneBookForm from '../PhoneBookForm/PhoneBookForm';
import PhoneBook from '../PhoneBook/PhoneBook';
import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter';
// import { filterItem } from '../../redux/actions/filter';
// import filterContacts from '../../helpers/FilterContacts'

const PhoneBookList = () => {
  const contacts = useSelector(state => state.items);
  // console.log(filterContacts())
  // const dispatch = useDispatch()
  //  function filterContacts(state) {
  //   // return contacts.filter((obj) => {
  //    console.log(state)
  //     // return state.toLowerCase().includes(state.toLowerCase().trim());
  //   // });
  //  }
  //   console.log(filterContacts())
  //   const name = useSelector(state => (state.filter));
  // const inputHandler = e => {
  //  console.log('filterSubmit')
  //     const value = e.target.value;
  // dispatch(filterItem(contacts.name))
  // const value = e.target.value;
  // console.log("name" , value)
  // console.log("name" , contacts)
  // console.log(filterItem(name))
  // setForm({ ...form, [name]: value });
  // };
  console.log(contacts);
  return (
    <div>
      <PhoneBookForm />
      <h1>List</h1>
      {contacts.length > 1 && <PhoneBookFilter />}
      <ul>
        {contacts.length ? (
          contacts.map((contact, index) => (
            <li key={contact.id}>
              <PhoneBook {...contact} index={index} />
            </li>
          ))
        ) : (
          <li>No contacts</li>
        )}
      </ul>
    </div>
  );
};
export default PhoneBookList;
