import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import './PhoneBookForm.css';
import { addItem } from '../../redux/actions/phoneBook';
// import PhoneBookFilter from '../PhoneBookFilter/PhoneBookFilter'

export default function PhoneBookForm() {
  const formInitialState = {
    name: '',
    number: '',
    email: '',
  };

  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();
  const inputHandler = e => {
    const name = e.target.name;

    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    // console.log(form);

    form.id = nanoid();
    dispatch(addItem(form));
    setForm(formInitialState);
  };
  const { name, number, email } = form;
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            required
            placeholder="Search name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={inputHandler}
          />
        </div>

        <div>
          <label htmlFor="">Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Search number"
            onChange={inputHandler}
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            name="email"
            value={email}
            onChange={inputHandler}
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
      {/* <PhoneBookFilter/> */}
    </div>
  );
}
