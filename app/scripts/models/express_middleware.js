ExpressorChromeExtension.ExpressMiddleware = DS.Model.extend({
    handlerName: DS.attr('string'),
    route: DS.attr('string'),
    source: DS.attr('string')
});
