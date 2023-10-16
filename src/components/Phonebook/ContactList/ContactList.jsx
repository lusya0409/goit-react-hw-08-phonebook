import { Item, List, ButtonDlt, SpanName } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <SpanName>{name}</SpanName> <span>{number}</span>
          <ButtonDlt
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ButtonDlt>
        </Item>
      ))}
    </List>
  );
};
