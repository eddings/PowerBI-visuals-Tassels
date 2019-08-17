var config = {
    persist: {
        get: function () {
            return {}
        },
        set: function (d) {
            //console.log('created settings:', JSON.stringify(d));
            return true;
        },
    },
    filter: {
        get: function () {
            return {}
        },
        set: function (d) {
            //console.log('created settings:', JSON.stringify(d));
            return true;
        },
    },
    visualHostTooltipService: {
        show: function () { },
        hide: function () { },
        move: function () { }
    },
    custom:{
        colors: [],
        categoryfillcolor: "",
        categoryfontcolor: "",
        overall: "All"
    },
    edit: false
};

var emulatePBIHostLifecycleEvent = function (CustomVisualManager, data) {
    CustomVisualManager(data, config);
};