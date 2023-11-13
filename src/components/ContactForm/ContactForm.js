import { Component } from 'react';
import { nanoid } from 'nanoid';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  phoneInputId = nanoid();
 
  handleChange = () => {};
  handleSubmit = () => {};
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <label htmlFor={this.phoneInputId}>Number</label>
        <input
          type="tel"
          name="number"
          id={this.phoneInputId}
          value={this.state.number}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
