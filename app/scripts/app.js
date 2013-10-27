var ExpressorChromeExtension = window.ExpressorChromeExtension = Ember.Application.create({
});
//ExpressorChromeExtension.set('expressorPage', 'http://127.0.0.1:');
/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/adapter');
require('scripts/models/*');
require('scripts/helpers/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/fixtures');

