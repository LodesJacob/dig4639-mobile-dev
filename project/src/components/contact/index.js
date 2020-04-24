import React from 'react';
import './index.css';

class Contact extends React.Component {
  render() {
      return (
        <div className="card contact">
          <p class="index">{this.props.index}</p>         
          <h2>{this.props.name}</h2>
          <p>{this.props.number}</p>
        </div>
      )
  }
}

export default Contact;