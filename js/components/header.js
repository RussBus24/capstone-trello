var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./board');

var Header = function(props) {
    var message = 'Things to get done';

        return (
            <div className="header">
                {message}
            </div>
        );
};

module.exports = Header;