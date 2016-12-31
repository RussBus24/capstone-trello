var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = require('./list')

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            cards: []
        };
    },
    
    onAddSubmit: function(event) {
        event.preventDefault();
        this.state.cards.push(this.state.text);
        this.setState({
            cards: this.state.cards
        });
        console.log(this.state.cards);
    },
    
    onAddInputChanged: function(event) {
        console.log(event.target.value);
        this.setState({
            text: event.target.value
        });
    },
    
    cardListInput: function(event) {
        this.setState({
            value: event.target.value
        });
        console.log(event.target.value);
    },
    
    render: function() {
        console.log(this.state);
        let cards = this.state.cards.map((card)=>{
            return <Card message={card}/>
        });
        return (
            
            <div className="list">
                <div className="list-title">{this.props.title}</div>
                {cards}
                <form id="addCard" onSubmit={this.onAddSubmit}>
                <input 
                    type="text" 
                    name="addCardInput"
                    onChange={this.onAddInputChanged}
                />
                <p><input type="submit" name="Submit" /></p>
                </form>
            </div>
        );
    }
})

module.exports = ListContainer;