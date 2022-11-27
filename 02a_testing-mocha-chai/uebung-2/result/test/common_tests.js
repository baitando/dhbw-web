describe('common', function () {

    it('stored tasks are loaded', async function () {
        localStorage.setItem("tasks-test", "[{\"id\": \"erster-task\", \"title\": \"Mein Titel\", \"notes\": \"Das ist eine Beschreibung\", \"due\": \"2021-12-24\", \"responsible\": \"Weihnachtsmann\"}]");

        var expect = chai.expect;
        var loadedTasks = loadStoredTasks("tasks-test");

        expect(loadedTasks).to.eql([{
            id: "erster-task",
            title: "Mein Titel",
            notes: "Das ist eine Beschreibung",
            due: "2021-12-24",
            responsible: "Weihnachtsmann"
        }]);
        localStorage.removeItem("tasks-test");
    });

    it('empty array provided when no stored tasks exist', async function () {
        localStorage.removeItem("tasks-test");

        var expect = chai.expect;
        var loadedTasks = loadStoredTasks("tasks-test");

        expect(loadedTasks).to.eql([]);
    });

});
