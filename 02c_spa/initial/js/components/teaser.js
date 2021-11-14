var teaserComponent = {
    props: ['teaser'],
    template: `
    <div class="col-12 col-md-6 col-lg-5 justify-content-center">
        <p class="teaser-title">{{ teaser.title }}</p>
        <p class="teaser-text">{{ teaser.description }}</p>
        <div class="teaser-action text-center">
            <a href="liste.html">
                <button class="btn" v-on:click="teaser.redirect">Direkt loslegen</button>
            </a>
        </div>
    </div>
    <div class="d-none d-md-block col-md-6 col-lg-7 ">
        <img src="img/startseite.jpeg" class="img-fluid"/>
    </div>
`
};
