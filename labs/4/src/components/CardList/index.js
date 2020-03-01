import React from 'react';
import data from './data.json'
import Card from  '../Card/index.js'

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: data.cards,
        }
    }
    removeCard = cardID => {
        const cards = this.state.cards.filter(card => card.id !== cardID);
        console.log(this.state.cards)
        this.setState({ cards: cards });
    };
    render() {
        return (
            <>
                {(this.state.cards).map(
                    (state, i) => 
                    <Card
                        key={i}
                        id={state.id}
                        title={state.title}
                        content={state.content}
                        onDelete={this.removeCard}
                    ></Card>
                )}
            </>
        )
    }
}

export default CardList;