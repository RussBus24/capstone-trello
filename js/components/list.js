var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = React.createClass({
    
    onAddInputChanged: function(event) {
        this.setState({
            value: event.target.value
        });
    },
    
    render: function() {
        return (
            <div className="list">
                <div className="list-title">{this.props.title}</div>
                <Card message = "Vacuum" />
                <Card message = "Wash" />
                <Card message = "Dusting" />
                <form id="addCard">
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
});


module.exports = List;