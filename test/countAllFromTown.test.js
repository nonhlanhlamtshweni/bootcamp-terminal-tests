let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('countAllFromTown function', function () {
    it('should return 3 for registration numbers in the string that is for Stellies.', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, 3)
    });
    it('should return 1 for registration numbers in the string that is from Kuilsriver.', function () {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.deepEqual(fromKuilsriver, 1)
    });
});