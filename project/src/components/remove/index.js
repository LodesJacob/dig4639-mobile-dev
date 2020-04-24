import React from 'react';
import './index.css';

class Remove extends React.Component {
  constructor(props) {
    super(props)
    this.removeContact = this.removeContact.bind(this)
  }
  removeContact(event) {
    event.preventDefault();
    let index = event.target.elements[0].value
    if (index) {
      console.log('remove contact')
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API': 'lodes'
        },
        body: JSON.stringify({
          "position": index
          })
      };
      fetch('http://plato.mrl.ai:8080/contacts/remove', requestOptions)
          .then(response => response.json())
          .then(data => {
            window.location.reload(false);
          });
      } else {
        console.log('enter index')
      }
  }
  render() {
      return (
        <form onSubmit={this.removeContact} className="card remove">         
          <input id="name" type="text" name="index" placeholder="Contact #" required/>
          <input type="submit"  value="Remove Contact by #" />
        </form>
      )
  }
}

export default Remove;