import React from 'react';
import './index.css';

class Card extends React.Component {
  render() {
      return (
        <div className="card">
          <button className="close" onClick={() => this.props.onDelete(this.props.id)}>X</button>
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
        </div>
      )
  }
}

export default Card;