import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h2 className={css.contactTitle}>Your contacts</h2>
      <div className={css.contactsWrapper}>
        <ContactForm />
        <div className={css.filterContactsWrapper}>
          <Filter />
          <div>{isLoading && 'Request in progress...'}</div>
          <ContactsList />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
