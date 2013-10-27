ExpressorChromeExtension.MiddlewareController = Ember.ArrayController.extend({
    showingCode: null,
    selectedMiddleware: null,

    actions: {
        viewCode: function(source){
            this.set('showingCode', source);
        }
    }
});
