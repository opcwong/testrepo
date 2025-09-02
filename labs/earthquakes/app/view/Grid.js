Ext.define('Earthquakes.view.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.earthquakesgrid',
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
    }]
});