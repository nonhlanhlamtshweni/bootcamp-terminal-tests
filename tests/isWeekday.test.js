let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday', function()  {

    it('should return true if the day passed isWeekday', function(){
            assert.equal(isWeekday('Saturday'), false);
            assert.equal(isWeekday('Tuesday'), true);
    })

    it('should return false if the day passed is not weekday', function(){
        assert.equal(isWeekday('Sunday'), false);

    })

});