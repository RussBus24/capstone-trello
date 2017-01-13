var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var ListTest = require('/home/ubuntu/workspace/react-trello/js/components/list.js');
var CardTest = require('/home/ubuntu/workspace/react-trello/js/components/card.js');

describe('ListTest component', function() {
    it('Renders list', function() {
        let cards = ["Red", "White", "Blue"];
        var title="Title Test"; 
                
        var renderer = TestUtils.createRenderer();
        renderer.render(<ListTest title={title} cards={cards} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal("list");
        
        var div = result.props.children[0];
        div.type.should.equal('div');
        div.props.className.should.equal('list-title');
        
        var form = result.props.children[2];
        form.type.should.equal('form');
        form.props.id.should.equal('addCard');
        
        
    });
});