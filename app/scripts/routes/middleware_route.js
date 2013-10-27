ExpressorChromeExtension.MiddlewareRoute = Ember.Route.extend({
    model: function () {
        return this.store.all('expressMiddleware');
    },
    setupController: function (controller, model) {
        controller.set('model', model);
    }
});
