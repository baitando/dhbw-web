describe("greet", function () {

    const expect = chai.expect;

    it('should retrun correct greeting', function () {
        expect(getGreeting("Miriam")).to.equal("Hello Miriam");
    });

});