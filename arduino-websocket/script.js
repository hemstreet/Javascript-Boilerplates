var _ = require('underscore'),
    socket = require('socket.io-client');

var obj = {

    config: require('./config/config.json'),

    init: function () {

        socket = socket(this.config.url);

        socket.on('connect', function () {
            console.log('connected');
        }.bind(this));

        socket.on('mock-event', function () {
            console.log('mock event fired');
            this.go();
        }.bind(this));

    },

    go: function() {

        console.log('do some logic');

    }
};

obj.init();