ExpressorChromeExtension.IndexRoute = Ember.Route.extend({
  redirect: function () {
    this.transitionTo('settings');
  }
});
