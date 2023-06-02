import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { filteredContactsList } from 'redux/contacts/selectors';
import css from './ContactsList.module.css';

export function ContactsList() {
  const filterContacts = useSelector(filteredContactsList);

  return (
    <ul className={css.contactList}>
      {filterContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}
