// import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import './PhoneBookForm.css';
import { addItem } from '../../redux/actions/phoneBook';

export default function PhoneBookForm() {
  const formInitialState = {
    name: '',
    number: '',
    email: '',
    //   id:nanoid()
  };
  //   const { register, handleSubmit } = useForm()
  const [form, setForm] = useState(formInitialState);
  const dispatch = useDispatch();
  const inputHandler = e => {
    const name = e.target.name;
    // console.log(e.target)
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    //   console.log(data)
    console.log(form);
    // console.log(register())
    form.id = nanoid();
    dispatch(addItem(form));
    setForm(formInitialState);

    // alert(JSON.stringify(data))
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
            // {...register('Name')}
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
            // {...register('Number')}
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
            // {...register('email')}
            onChange={inputHandler}
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}
