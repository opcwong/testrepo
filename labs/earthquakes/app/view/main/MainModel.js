Ext.define('Earthquakes.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {},
    formulas: {},
    stores: {
        earthquakes: {
            type: 'store',
            model: 'Ext.data.Model',
            fields: [{
                type: 'date',
                name: 'timestamp',
                dateFormat: 'c'
            }],
            sorters: ['timestamp'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'https://nameless-tundra-27404.herokuapp.com/go/?fn=earthquakes',
                reader: {
                    rootProperty: 'data'
                }
            },
            listeners: {
                load: 'onStoreLoad',
            },
        }
    }
});