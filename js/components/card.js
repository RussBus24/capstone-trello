var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
    var message = 'This is a card';

        return (
            <div className="card">
                {message}
            </div>
        );
};

module.exports = Card;