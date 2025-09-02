Ext.define('Earthquakes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires:['Earthquakes.view.Grid'],
    xclass: 'main',
    layout: 'border',
    items: [{
        xtype: 'earthquakes.grid',
        region: 'center'
    }]
  });