var teaserComponent = {
    props: ['teaser'],
    template: `
    <div class="col-12 col-md-6 col-lg-5 justify-content-center">
        <p class="teaser-title">{{ teaser.title }}</p>
        <p class="teaser-text">{{ teaser.description }}</p>
        <div class="teaser-action text-center" v-if="teaser.actionUrl">
            <a v-bind:href="teaser.actionUrl">
                <button class="btn">{{ teaser.actionLabel }}</button>
            </a>
        </div>
    </div>
    <div class="d-none d-md-block col-md-6 col-lg-7 ">
        <img v-bind:src="teaser.image" class="img-fluid"/>
    </div>
`
};
