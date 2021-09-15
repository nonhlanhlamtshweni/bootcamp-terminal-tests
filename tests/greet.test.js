let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Felicia appropriately', function(){
        assert.equal('HELLO, FELICIA', greet('Felicia'));
    });
    it('should greet Sino appropriately', function(){
        // this test will fail - can you fix it?
        assert.equal('HELLO, Sino', greet('Sino'));
    });
});