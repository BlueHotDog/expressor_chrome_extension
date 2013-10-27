ExpressorChromeExtension.ExpressRoutesRoute = Ember.Route.extend({
    model: function (){
        return this.store.all('expressRoute');
    }
});
