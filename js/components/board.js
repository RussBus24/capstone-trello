var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var Header = require('./header');

//This is work in progress.
var Board = React.createClass({
    render: function() {
        return (
            <div className="board">
            <Header title = "Things to do" />
                <List title = "Chores" />
                <List title = "Laundry" />
                <List title = "Cleaning" />
            </div>
        );
    }
});


module.exports = Board;