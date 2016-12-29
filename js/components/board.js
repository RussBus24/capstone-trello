var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var Header = require('./header');

//This is work in progress.
var Board = React.createClass({
     
     onAddInputChanged: function(event) {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
    },
    
    onAddSubmit: function(event) {
        console.log(event.target.value);
        event.preventDefault();
    },
    
    render: function() {
        return (
            <div className="board">
            <Header title = "Things to do" />
                <List title = "Chores" onAddInputChanged = {this.onAddInputChanged} onAddSubmit =  {this.onAddSubmit} />
                <List title = "Laundry" onAddInputChanged = {this.onAddInputChanged} onAddSubmit =  {this.onAddSubmit} />
                <List title = "Cleaning" onAddInputChanged = {this.onAddInputChanged} onAddSubmit =  {this.onAddSubmit} />
            </div>
        );
    }
});


module.exports = Board;