
// Ext.define('Tunes.view.main.Main',{
//     extend: 'Ext.panel.Panel',

//     requires: [
//         'Tunes.view.main.MainController',
//         'Tunes.view.main.MainModel'
//     ],

//     controller: 'main-main',
//     viewModel: {
//         type: 'main-main'
//     },

//     html: 'Hello, World!!'
// });

Ext.define("Tunes.view.main.Main", {
    extend: "Ext.panel.Panel",
    xtype: 'main',
    requires: [
        "Tunes.view.main.MainController",
        "Tunes.view.main.MainModel",
        'Ext.plugin.Viewport',
        'Tunes.view.View',
    ],
    controller: "main-main",
    viewModel: {
        type: "main-main"
    },
    //html: "Classic main view"
    foo: 12,
    layout: 'fit',
    items : [{
        xtype: 'tunesview',
        listeners: {
            itemclick: 'onShowPreview'
        },
        bind: {
            store: '{tunes}'
        }
    }],
});
