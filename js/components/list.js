var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = React.createClass({
    
    render: function() {
        let cards = this.props.cards.map((card)=>{
            return <Card message={card}/>
        });
        
        return (
            <div className="list">
                <div className="list-title">{this.props.title}</div>
                {cards}
                <form id="addCard" onSubmit={this.props.onAddSubmit}>
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
});


module.exports = List;