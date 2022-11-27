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

    it('existing task replaced', async function () {
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
        replaceTask(tasks, "erster-task", {
            id: "erster-task",
            title: "Mein neuer Titel",
            notes: "Das ist eine aktualisierte Beschreibung",
            due: "2021-12-25",
            responsible: "Elfen"
        });

        expect(tasks).to.eql([{
            id: "erster-task",
            title: "Mein neuer Titel",
            notes: "Das ist eine aktualisierte Beschreibung",
            due: "2021-12-25",
            responsible: "Elfen"
        }]);
    });

});
