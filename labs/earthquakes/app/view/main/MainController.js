Ext.define('Earthquakes.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: ['Ext.window.Toast'],

    onSelect: function(map, record) {
        var data = record.data;
        var time = Ext.Date.format(data.timestamp, 'F j, g:i a');
        var s = 'A magnitude ' + data.magnitude + ' earthquake occured ' + data.location + '.';
        Ext.toast(s, time, 't');
        this.lookupReference('eqgrid').ensureVisible(record);
    },

    onStoreLoad: function(store, records, successful) {
        if (successful && records.length > 0) {
            console.log('store load event triggered');
            var vm = this.getViewModel();
            vm.set('earthquake', records[records.length - 1]);
            // var largestEq = Ext.Array.max(records, function(record) {
            //     return record.get('magnitude');
            // });
            
            // vm.set('earthquake', largestEq);
        }
    }

});
