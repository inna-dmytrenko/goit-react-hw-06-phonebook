// import PhoneBookForm from '../PhoneBookForm/PhoneBookForm'
// import { useDispatch } from "react-redux";

const PhoneBook = ({ name, number, email, id }) => {
  // const dispatch = useDispatch();
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <p>{email}</p>
    </div>
  );
};
export default PhoneBook;
