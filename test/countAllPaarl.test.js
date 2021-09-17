let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl function', function () {
    it('should return 5 for all registration numbers from Paarl.', function () {
        assert.equal(5, countAllPaarl('CJ 345 123, CJ 2345, CJ 752 025, CL 123-546, CK 345, CJ 123, CJ 856 958'));
    });
    it('should return 1 for all registration numbers from Paarl.', function () {
        assert.equal(1, countAllPaarl('CJ 345 123, CK 345, CK 123'));
    });
    it('should return 5 for all registration numbers from Paarl.', function () {
        assert.equal(5, countAllPaarl('CJ 345 123, CK 345, CK 123, CJ 2345, CJ 752 025, CL 123-546, CJ 123, CJ 856 958'));
    });

});