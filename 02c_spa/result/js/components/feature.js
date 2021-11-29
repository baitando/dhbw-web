var featureComponent = {
    props: ['feature'],
    template: `
        <div class="feature">
        <img v-bind:src="feature.iconUrl" class="feature-icon"/>
        <p class="feature-title">{{ feature.title }}</p>
        <p class="feature-description">{{ feature.description }}</p>
        </div>
`
};
