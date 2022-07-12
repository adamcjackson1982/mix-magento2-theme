const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

//Locations
var vendorName = 'Vendor';
var themeName = 'Luma_Child';
var staticPath = '../../../../../pub/static/frontend/' + vendorName + '/' + themeName + '/en_GB/';

mix.sass('web/scss/styles.scss', 'web/css', {
    processUrls: false
}).sourceMaps(false, 'source-map')

// // Move images
 mix.copy('web/images/*', staticPath + 'images/');

// // Move CSS
 mix.copy('web/css/*', staticPath + 'css/')

// // Move JS
 mix.copy('web/js/*', staticPath + 'js/')

// LiveReload
mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
})

// Disable OS notifications for successful builds
mix.disableSuccessNotifications();