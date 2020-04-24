import React from 'react';
import './App.css';
import Profile from  './components/profile/index.js';
import Contact from  './components/contact/index.js';
import Add from './components/add/index.js';
import Remove from './components/remove/index.js';

class App extends React.Component {
  state = {
    profile: [],
    contacts: []   
  }
  getProfile() {
    // where to get data from
    fetch('http://plato.mrl.ai:8080/profile', {
      headers: {
        'API': 'lodes'
      }
    })
    // format response to json format
    .then(response => response.json())
    // then use the information
    .then(data => {
          console.log(data)
          this.setState({
            profile: data
          });
        });
  }
  getContacts() {
    // where to get data from
    fetch('http://plato.mrl.ai:8080/contacts', {
      headers: {
        'API': 'lodes'
      }
    })
    // format response to json format
    .then(response => response.json())
    // then use the information
    .then(data => {
      let contacts = data;
      console.log(contacts)

      if (contacts.contacts.length === 0) {
        contacts.contacts[0] = {
          'name': 'No Contacts',
          'number': ''
        }
      }

          console.log(contacts)

          this.setState({
            contacts: contacts.contacts
          });
        });
  }
  componentDidMount() {
    this.getProfile();
    this.getContacts();
  }
  render() {
    return(
      <>
        <div class="wrap">
          <Profile              
                  title={'Profile'}
                  name={this.state.profile.name}
                  count={this.state.profile.count + ' contacts'}
          />

          <Add />

          <Remove />
          
          {
          (this.state.contacts).map(
              (state, i) => 
              <Contact
                key={i}
                index={i}
                name={state.name}
                number={state.number}
              />
          )}
        </div>
      </>
    )
  }
}

export default App;
