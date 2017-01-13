var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var CardTest = require('/home/ubuntu/workspace/react-trello/js/components/card.js');

describe('CardTest component', function() {
    it('Renders card', function() {

        var classes="card highlight";
        var condition = false;
                
        var renderer = TestUtils.createRenderer();
        renderer.render(<CardTest classes={classes} onMouseOver={condition} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card ');
        result.props.onMouseOver.should.equal('false');

    });
});