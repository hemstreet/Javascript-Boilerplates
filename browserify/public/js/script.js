var $ = require('jquery'),
    _ = require('lodash');

(function() {


    var $el = $('<div>Hello World!</div>');

    $('body').append($el);

    console.log('Hello World!');

    var obj = {

        hello: "World",

        init: function(config) {

            //var config = require('./config/config.json');

            var config = _.assign( config, {
                "test": true
            });

            console.log(config, this.hello);

        }
    };

    obj.init({
        "test": false
    });

})();