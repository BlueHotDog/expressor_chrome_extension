ExpressorChromeExtension.ExpressRequestsRoute = Ember.Route.extend({
    model: function() {
        return this.store.all('expressRequest');
    }
});
