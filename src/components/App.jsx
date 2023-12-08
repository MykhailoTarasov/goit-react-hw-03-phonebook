import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Title } from './App.Styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Michael Jordan', number: '+13236723468' },
      { id: 'id-2', name: 'Christian Bale', number: '+13239168634' },
      { id: 'id-3', name: 'Emma Stone', number: '+14242706351' },
      { id: 'id-4', name: 'Densel Washington', number: '+14243250522' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const nameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (nameExists) {
      alert(`${newContact.name}' is arleady in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: 20,
          color: '#010101',
          
          textAlign: 'center',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.addContact} />

          <Title>Contacts</Title>
          <Filter filter={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
