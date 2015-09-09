(function ( $ ) {

    var $el = $( '<div>Hello World!</div>' );

    $( 'body' ).append( $el );

    console.log($el[0]);

    var Obj = function() {
        this.hello = "World";
    };

    Obj.prototype.init = function ( _options ) {

        var options = $.extend( {
            "test" : false
        }, _options );

        console.log( options, this.hello );

    };

    var obj = new Obj;

    obj.init( {
        "test" : true
    } );

})( jQuery );