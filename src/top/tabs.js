/**
 * Created by zjw on 16/11/10.
 */
define(['hbs!src/top/tpl/tabs', 'src/top/home'], function (tplTabs, home) {
    'use strict';
    console.log("tabs start");

    var model_tabs = {
        tabs: {
            home:'Home',
            profiles:'Profiles',
            messages:'Messages',
            settings:'Settings'
        }
    };
    document.getElementById('contents').innerHTML = tplTabs(model_tabs);

    // 设置默认的tab
    home.render();
    $('#tab_home').tab('show');

    // 定义各tab动作
    for (var key in model_tabs.tabs){
        (function(key){
            var tabIdSelector = '#tab_'+ key;
            $(tabIdSelector).click(function(e){
                // 按需加载profiles相关文件.
                require(['src/top/' + key], function(tab){
                    tab.render();
                    $(tabIdSelector).tab('show');
                });
            })
        })(key);

    }









});