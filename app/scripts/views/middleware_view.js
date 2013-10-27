ExpressorChromeExtension.MiddlewareView = Ember.View.extend({
});


// Define child view
ExpressorChromeExtension.CodeView = Ember.View.extend({
    templateName: 'code_view',
    valueChanged: (function(){
        Ember.run.scheduleOnce('afterRender', this, this.highlight);
    }).observes("value"),

    highlight: function() {
        hljs.highlightBlock(this.$("code").get(0));
    }
});
