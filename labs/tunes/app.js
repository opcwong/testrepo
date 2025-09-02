/*
 * This call registers your application to be launched when the browser is ready.
 */
// Ext.application({
//     name: 'Tunes',

//     requires: [
//         'Ext.MessageBox'
//     ],

//     launch: function () {
//         Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
//     }
// });

Ext.application({
    extend: 'Tunes.Application',
    requires: ['Tunes.view.main.Main'],
    name: 'Tunes',
    mainView: 'Tunes.view.main.Main'
});