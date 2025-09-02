/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyClassic.Application',

    name: 'MyClassic',

    requires: [
        // This will automatically load all classes in the MyClassic namespace
        // so that application classes do not need to require each other.
        'MyClassic.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyClassic.view.main.Main'
});
