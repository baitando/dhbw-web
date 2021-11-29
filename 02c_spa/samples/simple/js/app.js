var app = {
    data() {
        return {
            firstName: "Max",
            lastName: "Mustermann"
        }
    }
}

Vue.createApp(app)
    .mount('#app')

