import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const filteredContactsList = createSelector([selectContacts, selectFilter],
  (contacts, filter) => {
    const filteredContacts = () => {
      return contacts.filter(({name}) => name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
    }
    return filteredContacts().sort((a, b) => a.name.localeCompare(b.name));
  }
);

  // const filteredContacts = (contacts, filter) => {
  //   console.log(isLoading);
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  //   );
  // };

  // const visibleContacts = filteredContacts(contacts, filter);
