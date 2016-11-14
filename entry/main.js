/**
 * Created by zjw on 16/11/7.
 */
require.config({
    baseUrl: '../',
    paths:{
        'bootstrap':'deps/bootstrap/js/bootstrap',
        'jquery':'deps/jquery/jquery',
        'hbs':'deps/require-handlebars-plugin/hbs'
    },
    hbs: {
        helpers: true,            // default: true
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    },
    shim: {
        'bootstrap': {
            'deps': ['jquery']
        }
    }


});

require(['jquery','bootstrap', 'src/app'],function($, bootstrap, app){

});