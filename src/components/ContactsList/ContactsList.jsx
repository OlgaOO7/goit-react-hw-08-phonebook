import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
// import { selectContacts, selectIsLoading, selectError, selectFilter, filteredContactsList } from 'redux/contacts/selectors';
import { filteredContactsList } from 'redux/contacts/selectors';
import css from './ContactsList.module.css';

export function ContactsList() {
  // const filter = useSelector(selectFilter);
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError); 
  const filterContacts = useSelector(filteredContactsList);
  // console.log(contacts);



  // const filteredContacts = (contacts, filter) => {
  //   console.log(isLoading);
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  //   );
  // };

  // const visibleContacts = filteredContacts(contacts, filter);

  return (
    <ul className={css.contactList}>
      {filterContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}
