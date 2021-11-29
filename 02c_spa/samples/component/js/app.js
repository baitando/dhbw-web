var personComponent = {
    props: [ 'person' ],
    template: `
    <p>Hallo {{ person.firstName }} {{ person.lastName }}</p>
    `
}

var app = {
    data() {
        return {
            person: {
                firstName: "Miriam",
                lastName: "Mustermann"
            }
        }
    }
}

Vue.createApp(app)
    .component('person', personComponent)
    .mount('#app')

