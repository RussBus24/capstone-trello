var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var Header = require('./data');

var Board = React.createClass({
    render: function() {
        var lists = [];
        for (var i=0; i<3; i++) {
            lists.push(<List />);
        }
        return (
            <div className="board">
                <Header title = "Things to do" />
                {lists}
                <List title = "" />
            </div>
        );
    }
});

module.exports = Board;