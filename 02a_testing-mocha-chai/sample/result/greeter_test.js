describe("greet", function () {

    const expect = chai.expect;
    const assert = chai.assert;
    chai.should();

    it('should return correct greeting (expect style)', function () {
        expect(getGreeting("Miriam")).to.equal("Hello Miriam");
    });

    it('should return correct greeting (assert style)', function () {
        assert.equal(getGreeting("Miriam"), "Hello Miriam");
    });

    it('should return correct greeting (should style)', function () {
        getGreeting("Miriam").should.equal("Hello Miriam");
    });

});