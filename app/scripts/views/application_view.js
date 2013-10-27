ExpressorChromeExtension.ApplicationView = Ember.View.extend({
    didInsertElement: function () {
        Ember.run.next(this, function () {
            $(document).foundation();
        })
    }
});
