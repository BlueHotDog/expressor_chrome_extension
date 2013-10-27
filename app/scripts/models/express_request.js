ExpressorChromeExtension.ExpressRequest = DS.Model.extend({
    url: DS.attr('string'),
    method: DS.attr('string'),
    startTime: DS.attr('string'),
    referrer: DS.attr('string'),
    status: DS.attr('string'),
    type: DS.attr('string'),
    responseTime: DS.attr('string')
});
