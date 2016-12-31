var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var ListContainer = require('./list-container');
var Header = require('./header');

//This is work in progress.
var Board = React.createClass({
    
    getInitialState: function() {
        return {
            listName:'',
            cards: [],
            lists: []
        };
    },
     
    onAddListInputChanged: function(event) {
        console.log(event.target.value);
        this.setState({
            listName: event.target.value
        });
    },
    
    onAddListSubmit: function(event) {
        event.preventDefault();
        this.state.lists.push(this.state.listName);
        this.setState({
            lists: this.state.lists
        });
        console.log(this.state.lists);
    },
    
    render: function() {
        console.log(this.state);
        let lists = this.state.lists.map((list)=> {
            return <ListContainer title={list}/>;
        });
        return (
            <div className="board">
            <Header title = "Things to do" />
                {lists}
                
                <form id="addList" onSubmit={this.onAddListSubmit}>
                <input 
                    type="text" 
                    name="addListInput"
                    onChange={this.onAddListInputChanged}
                />
                <p><input type="submit" name="Submit" value="Add New List"/></p>
                </form>
            </div>
        );
    }
});


module.exports = Board;