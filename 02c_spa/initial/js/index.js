var app = {
    data() {
        return {
            features: [
                {
                    title: 'Aufgabenliste',
                    description: 'Aufgaben können ganz einfach über eine intuitiv zu bedienende Oberfläche angelegt und verwaltet werden.',
                    iconUrl: 'img/checked-box.png'
                },
                {
                    title: 'Zusammenarbeit',
                    description: 'Man muss nicht alles selbst erledigen. Arbeite ganz einfach mit deinem Team zusammen an dem, was euch weiterbringt.',
                    iconUrl: 'img/collaboration.png'
                }
            ],
            teaser: {
                title: 'Aufgaben verwalten so einfach wie nie zuvor',
                description: 'Die App, die dir hilft Dinge zu erledigen anstatt sie vor dir herzuschieben.'
            }
        }
    }
}

Vue.createApp(app)
    .component('feature', featureComponent)
    .component('teaser', teaserComponent)
    .mount('#app');
