(function ( $ ) {

    var $el = $( '<div>Hello World!</div>' );

    $( 'body' ).append( $el );

    console.log($el[0]);

    var obj = {

        hello : "World",

        init : function ( _options ) {

            var options = $.extend( {
                "test" : false
            }, _options );

            console.log( options, this.hello );

        }
    };

    obj.init( {
        "test" : true
    } );

})( jQuery );