Ext.define('Earthquakes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main',
    xtype: 'main',
    controller: 'main',
    tbar: [{ 
        xtype: 'combobox',

        listeners:{
            change: function(combobox, value){
                combobox.up('main').setData({name: combobox.selection.data.name});
            }  
        },

        fieldLabel: 'Choose State',
        store: {
            fields: ['abbr', 'name'],
            data: [
                {"abbr": "AL","name": "Alabama"}, 
                {"abbr": "AK","name": "Alaska"}, 
                {"abbr": "AZ","name": "Arizona"}
            ]
        },
        queryMode: 'local',
        displayField: 'name',
        valueField: 'abbr', 
        margin: 16
    }],
    tpl: '<h2>{name}</h2>',
    requires: [
        'Earthquakes.view.Grid',
        'Ext.plugin.Viewport',
        'Earthquakes.view.Map',
        'Earthquakes.view.main.MainModel',
        'Ext.window.Toast',
        'Earthquakes.view.main.MainController',
    ],
    layout: 'border',
    title: 'Earthquakes in Iceland',
    viewModel: {
        type: 'main',
    },
    // viewModel: {
    //     type: 'default',
    //     stores: {
    //         earthquakes: {
    //             type: 'store',
    //             model: 'Ext.data.Model',
    //             fields: [{
    //                 type: 'date',
    //                 name: 'timestamp',
    //                 dateFormat: 'c'
    //             }],
    //             sorters: ['timestamp'],
    //             autoLoad: true,
    //             proxy: {
    //                 type: 'ajax',
    //                 url: 'https://nameless-tundra-27404.herokuapp.com/go/?fn=earthquakes',
    //                 reader: {
    //                     rootProperty: 'data'
    //                 }
    //             }
    //         }
    //     }
    // },
    items: [{
        xtype: 'earthquakesmap',
        region: 'north',
        flex: 1,
        location: {
            latitude: 64.9312762,
            longitude: -19.021169
        },
        split: true,
        listeners: {
            select: 'onSelect',
            //load: 'onStoreLoad',
        },
        bind: {
            store: '{earthquakes}',
            selection: '{earthquake}'
        }
        // store: {
        //     type: 'store',
        //     model: 'Ext.data.Model',
        //     region: 'north',
        //     flex: 1,
        //     fields: [{
        //         type: 'date',
        //         name: 'timestamp',
        //         dateFormat: 'c'
        //     }
        //     ],
        //     sorters: ['timestamp'],
        //     autoLoad: true,
        //     proxy: {
        //         type: 'ajax',
        //         url: 'https://nameless-tundra-27404.herokuapp.com/go/?fn=earthquakes',
        //         reader: {
        //             rootProperty: 'results'
        //         }
        //     }
        // }
    },{
        xtype: 'earthquakesgrid',
        reference: 'eqgrid',
        region: 'center',
        flex: 1,
        bind: {
            store: '{earthquakes}',
            selection: '{earthquake}'
        }
        // store: {
        //     type: 'store',
        //     model: 'Ext.data.Model',
        //     fields: [{
        //         type: 'date',
        //         name: 'timestamp',
        //         dateFormat: 'c'
        //     }],
        //     sorters: ['timestamp'],
        //     autoLoad: true,
        //     proxy: {
        //         type: 'ajax',
        //         url: 'https://nameless-tundra-27404.herokuapp.com/go/?fn=earthquakes',
        //         reader: {
        //             rootProperty: 'data'
        //         }
        //     }
        // },
    
    },
    // {xtype: 'earthquakesgrid',
    //     region: 'center',
    //     store: {
    //         type: 'store',
    //         model: 'Ext.data.Model',
    //         fields: [{
    //             type: 'date',
    //             name: 'timestamp',
    //             dateFormat: 'c'
    //         }],
    //         sorters: ['timestamp'],
    //         autoLoad: true,
    //         proxy: {
    //             type: 'ajax',
    //             url: 'https://nameless-tundra-27404.herokuapp.com/go/?fn=earthquakes',
    //             reader: {
    //                 rootProperty: 'data'
    //             }
    //         }
    //     }}
]
});
