import React from 'react';
import './index.css';

class Card extends React.Component {
  render() {
      return (
        <div className="card">         
          <h3>{this.props.title}</h3>
          <h2>{this.props.content}&deg; {this.props.unit}</h2>
          <p>{this.props.description}</p>
        </div>
      )
  }
}

export default Card;