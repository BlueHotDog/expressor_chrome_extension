ExpressorChromeExtension.GeneralServerInfo = DS.Model.extend({
    uptime: DS.attr('string'),
    platform: DS.attr('string'),
    pid: DS.attr('string'),
    version: DS.attr('string'),
    args: DS.attr('string')
});
