
import { Component } from 'react';
import initialContacts from '../contacts.json';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };
  
  handleFilter = () => {};
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList items={this.state.contacts} />
        <GlobalStyle/>
      </div>
    );
  }
}
