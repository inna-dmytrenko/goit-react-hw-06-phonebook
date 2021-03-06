import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import './PhoneBookForm.styled.js';
// import { addItem } from '../../redux/actions/phoneBook';
// import { addItem } from '../../redux/slices/phoneBook';
import { addItem } from '../../redux/phoneBook/phoneBook-actions.js';
import { useSelector } from 'react-redux';
import { Form, Input, Label, Button, App } from './PhoneBookForm.styled';
export default function PhoneBookForm() {
  const formInitialState = {
    name: '',
    number: '',
    email: '',
  };
  const contacts = useSelector(state => state.items);

  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();
  const inputHandler = e => {
    const name = e.target.name;

    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(el => el.name === name) ||
      contacts.some(el => el.number === number) ||
      contacts.some(el => el.email === email)
    ) {
      return toast(`${name} is already in contacts`);
    }

    form.id = nanoid();
    dispatch(addItem(form));
    setForm(formInitialState);
  };
  const { name, number, email } = form;
  return (
    <App>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="">Name</Label>
          <Input
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
          <Label htmlFor="">Number</Label>
          <Input
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
          <Label htmlFor="">Email</Label>
          <Input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            name="email"
            value={email}
            onChange={inputHandler}
          />
        </div>
        <Button type="submit">Add contact</Button>
      </Form>
      <ToastContainer />
    </App>
  );
}
