import React from 'react';
import './index.css';

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.createContact = this.createContact.bind(this)
  }
  createContact(event) {
    event.preventDefault();
    let name = event.target.elements[0].value
    let number = event.target.elements[1].value
    if (name && number) {
      console.log('create contact')
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API': 'lodes'
        },
        body: JSON.stringify({
          "name": name,
          "number": number
          })
      };
      fetch('http://plato.mrl.ai:8080/contacts/add', requestOptions)
          .then(response => response.json())
          .then(data => {
            window.location.reload(false);
          });
      } else {
        console.log('enter name and number')
      }
  }
  render() {
      return (
        <form onSubmit={this.createContact} className="card add">         
          <input id="name" type="text" name="name" placeholder="Name" required />
          <input id="number" type="text" name="number" placeholder="Number" required />
          <input type="submit"  value="Create Contact" />
        </form>
      )
  }
}

export default Add;