var _ = require('lodash');

var MyModule = function(config) {
    this.config = _.assign( config, {
        "test": true
    });
};

MyModule.prototype.helloWorld = function() {
    console.log('hello world');
};

module.exports = MyModule;