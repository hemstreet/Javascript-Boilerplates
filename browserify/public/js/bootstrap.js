var $ = require('jquery'),
    _ = require('lodash');

import { MyExtraModule } from './MyExtraModule';
new MyExtraModule();

class MyClass {
    constructor(config) {
        this.hello = "Hello variables";

        var $el = $('<div>Hello World!</div>');

        $('body').append($el);
        console.log('Hello World!!');
        this.init(config);
    }
    init(config) {
        var config = _.assign( config, {
            "test": true
        });

        console.log(config, this.hello);
    }
}

new MyClass({
    test: false
});