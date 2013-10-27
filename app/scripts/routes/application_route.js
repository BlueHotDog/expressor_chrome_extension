ExpressorChromeExtension.ApplicationRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        var socket = io.connect('http://127.0.0.1:3349');
        var store = this.get("store");

        function clearCurrentRecords(records){
            while(records.length) {
                records[0].unloadRecord();
            }
            return this;
        }

        socket.on('generalSettings', function(settings){
            settings.id = 0;
            var data = {
                general_server_info: [settings]
            };
            store.pushPayload('generalServerInfo', data);
        });

        socket.on('uptime', function(uptime){
            var data = {
                general_server_info: [{
                    id: 0,
                    uptime: uptime
                }]
            };
            store.pushPayload('generalServerInfo', data);
        });

        socket.on('middlewares', function(middlewares){
            clearCurrentRecords(store.all('expressMiddleware').content);
            middlewares.forEach(function (middleware) {
                middleware = {
                    express_middleware: [middleware]
                };
                store.pushPayload('expressMiddleware', middleware);
            });
        });

        socket.on('settingSet', function(setting) {
            setting = {
                express_setting: [setting]
            };
            store.pushPayload('expressSetting', setting);
        });
        socket.on('settings', function(settings){
            clearCurrentRecords(store.all('expressSetting').content);
            settings.forEach(function (setting) {
                setting = {
                    express_setting: [setting]
                };
                store.pushPayload('expressSetting', setting);
            });
        });


        socket.on('routes', function (routes) {
//            clearCurrentRecords(store.all('expressRoute').content);
            routes.forEach(function(route) {
                route = { express_route: [route] };
                store.pushPayload('expressRoute', route);
            });
        });

        socket.on('requests', function(requests){
            clearCurrentRecords(store.all('expressRequest').content);
            requests.forEach(function(request) {
                store.pushPayload('expressRequest', {
                    express_request: [
                      request
                    ]
                })
            });
        });

        socket.on('request', function(request) {
            store.pushPayload('expressRequest', {
                express_request: [
                  request
                ]
            });
        });
    }
});
