import { BsTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
// import { deleteItem } from '../../redux/actions/phoneBook';
// import { deleteItem } from '../../redux/slices/phoneBook';
import { deleteItem } from '../../redux/phoneBook/phoneBook-actions';

import { Frame } from './PhoneBook.styled';

const PhoneBook = ({ name, number, email, id }) => {
  const dispatch = useDispatch();
  const deleteContacts = () => {
    dispatch(deleteItem(id));
  };
  return (
    <Frame>
      <p>{name}</p>
      <p>{number}</p>
      <p>{email}</p>
      <span onClick={deleteContacts}>
        <BsTrashFill />
      </span>
    </Frame>
  );
};
export default PhoneBook;
