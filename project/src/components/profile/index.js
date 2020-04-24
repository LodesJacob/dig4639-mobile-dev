import React from 'react';
import './index.css';

class Profile extends React.Component {
  render() {
      return (
        <div className="card profile">         
          <h3>{this.props.title}</h3>
          <h2>{this.props.name}</h2>
          <p>{this.props.count}</p>
        </div>
      )
  }
}

export default Profile;