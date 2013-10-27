ExpressorChromeExtension.ExpressRoute = DS.Model.extend({
    method: DS.attr('string'),
    path: DS.attr('string'),
    regexp: DS.attr('string'),
    keys: DS.hasMany('express_route_key')
});
