
// Ext.define('Tunes.view.main.Main',{
//     extend: 'Ext.Container',

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

// Ext.define("Tunes.view.main.Main", {
//     extend: "Ext.Container",
//     xtype: 'main',
//     layout: 'fit',
//     requires: [
//         "Tunes.view.main.MainController",
//         "Tunes.view.main.MainModel",
//         "Tunes.view.View"
//     ],
//     controller: "main-main",
//     viewModel: {
//         type: "main-main"
//     },
// });

Ext.define("Tunes.view.main.Main", {
    extend:'Ext.navigation.View',
    xtype: 'main',
    title:'iTunes Music Videos',
    requires: [
        "Tunes.view.main.MainController",
        "Tunes.view.main.MainModel",
        'Tunes.view.View'
    ],
    controller: "main-main",
    viewModel: {
        type: "main-main"
    },
    //layout: 'fit',
    indexBar: true,
    items: [{
        xtype: 'tunesview',     
        bind: {
            store: '{tunesGrouped}'
        },
        listeners: {
            itemtap: 'onShowPreview'
        }
    }]
});
