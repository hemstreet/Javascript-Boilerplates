"use strict";

var _ = require('underscore');

var Socket = function (io) {
    this.io = io;

    this.setupListeners();
};

Socket.prototype.setupListeners = function () {

    this.io.on('connection', function (socket) {

        console.log('User Connected');

    });

};

module.exports = Socket;