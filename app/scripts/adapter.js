DS.ArrayTransform = DS.Transform.extend({
    deserialize: function (data) {
        if (data)
            return data;
        return null;
    },

    serialize: function (array) {
        return array;
    }
});

ExpressorChromeExtension.register('transform:array', DS.ArrayTransform);

ExpressorChromeExtension.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'expressor',
  host: 'http://127.0.0.1:3000',
  ajax: function (url, type, hash) {
    hash.url = url;
    hash.type = type;
    hash.dataType = 'jsonp';
    hash.context = this;

    if (hash.data && type !== 'GET') {
      hash.data = JSON.stringify(hash.data);
    }

    jQuery.ajax(hash);
  }
});


