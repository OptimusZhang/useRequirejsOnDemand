/**
 * Created by zjw on 16/11/10.
 */
define(['hbs!src/top/tpl/profiles'], function (tpl) {
    'use strict';
    return {
        render: function(){
            document.getElementById('profiles').innerHTML = tpl();
        }
    };
});