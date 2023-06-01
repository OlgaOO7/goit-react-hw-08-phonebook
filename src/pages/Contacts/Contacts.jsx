import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from "components/Filter/Filter";
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
};

export default Contacts;
