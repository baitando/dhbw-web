var app = {
    data() {
        return {
            teaser: {
                title: 'Ein Angebot, das mit den Anforderungen wächst',
                description: 'Für jedes Bedürfnis das richtige Preismodell finden. Auf einen Blick. Und das Beste: Unser Basismodell ist gratis. Für immer.',
                image: 'img/preise.jpeg'
            }
        }
    }
}

Vue.createApp(app)
    .component('teaser', teaserComponent)
    .mount('#app');
