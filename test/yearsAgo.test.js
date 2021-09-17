let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('yearsAgo function' , function(){
    it('should return the number of years that a year is from the current year, in this case 58.' , function(){
        assert.equal(yearsAgo(1963), (new Date().getFullYear() -1963));
    });
    it('should return 66 for 1955.' , function(){
        assert.equal(yearsAgo(1955), (new Date().getFullYear() - 1955));
    });
    it('should return 45 for 1976.' , function(){
        assert.equal(yearsAgo(1976), (new Date().getFullYear() - 1976));
    });
    it('should return 20 for 2001.' , function(){
        assert.equal(yearsAgo(2001), (new Date().getFullYear() - 2001));
    });

});