ExpressorChromeExtension.GeneralServerInfoController = Ember.ArrayController.extend({
    content: function () {
        return this.store.all('generalServerInfo');
    }.property()
});
