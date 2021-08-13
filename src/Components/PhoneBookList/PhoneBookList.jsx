import { useSelector, useDispatch } from 'react-redux';
import PhoneBookForm from '../PhoneBookForm/PhoneBookForm';
import PhoneBook from '../PhoneBook/PhoneBook';
import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter';

const PhoneBookList = () => {
  const contacts = useSelector(state => state.items);

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
