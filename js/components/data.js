var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./board');

var Header = function(props) {

        return (
            <div className="header">
                {props.title}
            </div>
        );
};



module.exports = Header;