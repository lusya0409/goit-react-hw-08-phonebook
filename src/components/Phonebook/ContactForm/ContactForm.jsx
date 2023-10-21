import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const FormShema = Yup.object().shape({
  name: Yup.string()
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(12, 'At least 12 mins!')
    .max(13, 'At most 13 maxes!')
    .required('Required'),
});
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, actions) => {
    console.log(values);
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
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: FormShema,
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ marginBottom: '20px' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        type="text"
        id="name"
        label="Name"
        name="name"
        autoComplete="off"
        autoFocus
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        type="tel"
        id="number"
        label="Number"
        name="number"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
      />

      <Button color="primary" variant="contained" fullWidth type="submit">
        Add contact
      </Button>
    </form>
  );
};
