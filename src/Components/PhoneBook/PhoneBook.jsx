// import PhoneBookForm from '../PhoneBookForm/PhoneBookForm'
import { BsTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions/phoneBook';

const PhoneBook = ({ name, number, email, id, index }) => {
  const dispatch = useDispatch();
  const deleteContacts = () => {
    dispatch(deleteItem(id));
    console.log('kkkkk', id);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <p>{email}</p>
      <span onClick={deleteContacts}>
        <BsTrashFill />
      </span>
    </div>
  );
};
export default PhoneBook;
