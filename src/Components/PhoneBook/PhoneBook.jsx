import { BsTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions/phoneBook';
import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter';

const PhoneBook = ({ name, number, email, id, index }) => {
  const dispatch = useDispatch();
  const deleteContacts = () => {
    dispatch(deleteItem(id));
  };
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <p>{email}</p>
      <span onClick={deleteContacts}>
        <BsTrashFill />
      </span>
      {/* <PhoneBookFilter /> */}
    </div>
  );
};
export default PhoneBook;
