import { useSelector, useDispatch } from 'react-redux';
import PhoneBookForm from '../PhoneBookForm/PhoneBookForm';
import PhoneBook from '../PhoneBook/PhoneBook';
import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter';
import filterContacts from '../../helpers/FilterContacts';
import { Container, Title } from './PhoneBookList.styled';

const PhoneBookList = () => {
  const contactsFromRedux = useSelector(state => state.items);
  console.log(contactsFromRedux);
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);
  const contacts = filterContacts(contactsFromRedux, filterValue);
  return (
    <Container>
      <PhoneBookForm />
      <Title>List</Title>
      {contacts && <PhoneBookFilter />}
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
    </Container>
  );
};
export default PhoneBookList;
