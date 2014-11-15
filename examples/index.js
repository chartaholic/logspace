'use strict';

var logspace = require( './../lib' ),
	out;

// Default behavior:
console.log( '\nDefault:' );
out = logspace( 0, 3 );
console.log( out.join( '\n' ) );

// Specify length:
console.log( '\nLength 100:' );
out = logspace( 0, 3, 100 );
console.log( out.join( '\n' ) );

// Create an array with decremented values:
console.log( '\nDecremented:' );
out = logspace( 3, 0, 10 );
console.log( out.join( '\n' ) );
