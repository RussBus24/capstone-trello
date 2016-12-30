var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = require('./list')

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            cards: []
        };
    },
    
    cardListInput: function(event) {
        this.setState({
            value: event.target.value
        });
        console.log(event.target.value);
    },
    
    onAddSubmit: function(event) {
        event.preventDefault();
        this.state.cards.push(event.target.value);
        this.setState({
            cards: this.state.cards
        });
        console.log(this.state.cards);
    },
    
    render: function() {
        return (
            
            <div className="list">
                <div className="list-title">{this.props.title}</div>
                <Card message = {this.state.cards} onAddInputChanged = {this.props.onAddInputChanged} onAddSubmit = {this.onAddSubmit} />
                <Card message = {this.state.cards} onAddInputChanged = {this.props.onAddInputChanged} onAddSubmit = {this.onAddSubmit} />
                <Card message = {this.state.cards} onAddInputChanged = {this.props.onAddInputChanged} onAddSubmit = {this.onAddSubmit} />
                <form id="addCard" onSubmit={this.onAddSubmit}>
                <input 
                    type="text" 
                    name="addCardInput"
                    onChange={this.props.onAddInputChanged}
                />
                <p><input type="submit" name="Submit" /></p>
                </form>
            </div>
        );
    }
})

module.exports = ListContainer;