// Ext.define('Tunes.view.View', {
//     extend: 'Ext.view.View',
//     xtype: 'tunesview',
//     scrollable: true,
//     itemTpl: [
//         '<figure>',
//         '<img src="{image}">',
//         '<figcaption><b>{title}</b><br>{artist}</figcaption><br>',
//         '</figure>'
//     ]
// });

Ext.define('Tunes.view.View', {
    extend: 'Ext.view.View',
    xtype: 'tunesview',
    scrollable: true,
    itemCls: 'video',
    cls: 'tunesview',
    overItemCls: 'overvideo',
    itemTpl: [
        '<figure>',
        '<img src="{image}">',
        '<figcaption><b>{title}</b><br>{artist}</figcaption><br>',
        '</figure>'
    ]
});