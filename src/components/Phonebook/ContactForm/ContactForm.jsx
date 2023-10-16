import { Formik } from 'formik';
import {
  StyledForm,
  StyledField,
  Label,
  ErrorMsg,
  ButtonAdd,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

const FormShema = Yup.object().shape({
  name: Yup.string()
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(3, 'Too Short!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(10, 'At least 10 mins!')
    .max(13, 'At most 13 maxes!')
    .required('Required'),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, actions) => {
    const hasContact = contacts.find(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (hasContact) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormShema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label>
          Name
          <StyledField name="name" type="text" required />
          <ErrorMsg name="name" component="div" />
        </Label>
        <Label>
          Number
          <StyledField name="number" type="tel" required />
          <ErrorMsg name="number" component="div" />
        </Label>

        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </StyledForm>
    </Formik>
  );
};
