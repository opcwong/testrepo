Ext.define('Earthquakes.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.earthquakes.grid',
    title: 'Earthquakes in Iceland',
    store: {
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
        }
    },
    columns: [{
        xtype: 'datecolumn',
        text: 'Time',
        dataIndex: 'timestamp',
        format: 'F j, Y \\a\\t H:i',
        flex: 0.5
    }, {
        text: 'Where (V = west, A = east)',
        dataIndex: 'location',
        flex: 1
    }, {
        xtype: 'numbercolumn',
        text: 'Magnitude',
        dataIndex: 'magnitude',
        width: 140,
        align: 'right',
        format: '0.0'
    }, {
        xtype: 'numbercolumn',
        text: 'Depth',
        dataIndex: 'depth',
        width: 140,
        align: 'right',
        format: '0.0'
    }]
});