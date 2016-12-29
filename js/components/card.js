var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    
    onHover: function() {
      this.setState({
          highlight: !this.state.highlight
      }); 
    },
    
    render: function() {
        var classes = 'card '+ (this.state.highlight ? 'highlight' : '')
            return (
                <div className={classes} onMouseOver={this.onHover}>
                    {this.props.message}
                </div>
            );
    }
});

module.exports = Card;