// Ext.define('Tunes.view.main.MainModel', {
//     extend: 'Ext.app.ViewModel',
//     alias: 'viewmodel.main-main',
//     data: {
//         name: 'Tunes'
//     }

// });

// Ext.define('Tunes.view.main.MainModel', {
//     extend: 'Ext.app.ViewModel',
//     alias: 'viewmodel.main-main',
//     requires: ['Tunes.model.Tune'],
//     stores: {
//         tunes: {
//             model: 'Tune',
//             autoLoad: true,
//             sorters: ['artist', 'title'],
//         }
//     }
// });

Ext.define('Tunes.view.main.MainModel', {
    extend: 'Tunes.view.main.BaseModel',
    alias: 'viewmodel.main-main'
});
