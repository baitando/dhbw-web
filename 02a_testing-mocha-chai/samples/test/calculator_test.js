describe("calculations", function () {

    var expect = chai.expect;

    it('should correctly sum up two positive numeric values', function () {
        expect(sum(12, 5)).to.equal(17);
    });

    it('should correctly sum up two negative numeric values', function () {
        expect(sum(-12, -5)).to.equal(-17);
    });

    it('should correctly sum up to values which can be converted to number', function () {
        expect(sum("1", 5)).to.equal(6);
    });

    it('should fail to sum up character and number', function () {
        expect(function () {
            sum("a", 5);
        }).to.throw(Error, "illegal arguments");
    });
})
