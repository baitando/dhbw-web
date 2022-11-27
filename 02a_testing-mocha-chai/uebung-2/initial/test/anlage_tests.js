describe('task management', function () {

    it('desired task found', async function () {
        const expect = chai.expect;
        const tasks = [
            {
                id: "erster-task",
                title: "Mein Titel",
                notes: "Das ist eine Beschreibung",
                due: "2021-12-24",
                responsible: "Weihnachtsmann"
            }
        ];
        const foundTask = getTaskById(tasks, "erster-task");

        expect(foundTask).to.eql({
            id: "erster-task",
            title: "Mein Titel",
            notes: "Das ist eine Beschreibung",
            due: "2021-12-24",
            responsible: "Weihnachtsmann"
        });
    });

});
