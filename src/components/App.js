import { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Container, Title } from './App.styled';
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  handleFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };
  addContact = newContact => {
    const contact = { ...newContact, id: nanoid() };
    const checkContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  filteredList = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm updateContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateFilter={this.handleFilter} />
        {this.filteredList().length > 0 && (
          <ContactList
            items={this.filteredList()}
            onDelete={this.deleteContact}
          />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
