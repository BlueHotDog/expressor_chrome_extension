ExpressorChromeExtension.SettingsRoute = Ember.Route.extend({
  model: function () {
      return this.store.all('expressSetting');
  }
});
