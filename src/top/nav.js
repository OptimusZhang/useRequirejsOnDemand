/**
 * Created by zjw on 16/11/10.
 */
define(['hbs!src/top/tpl/nav'], function (tplNav) {
    'use strict';

    console.log("nav start");
    var model_nav = {
        title: "Example for lazyload",
        label: 'requireJs'
    };
    document.getElementById('nav').innerHTML = tplNav(model_nav);
});