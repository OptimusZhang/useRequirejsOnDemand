/**
 * Created by zjw on 16/11/10.
 */
define(['hbs!src/top/tpl/settings'], function (tpl) {
    'use strict';
    return {
        render: function(){
            document.getElementById('settings').innerHTML = tpl();
        }
    };
});