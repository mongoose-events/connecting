/* eslint prefer-rest-params: off */

'use strict';

var connecting = require( '../src/index' )
var db = require( './fixture/db' )
var sinon = require( 'sinon' )
var spy = sinon.spy( console, 'log' )
var tap = require( 'tap' )

tap.test( 'connectingEvent without debug output',
  function ( t ) {
    var connectingEvent

    db.base.options.debug = false
    connectingEvent = connecting.bind( db )
    connectingEvent()

    t.same( spy.notCalled, true, 'should not output a console.log message' )
    t.end()
  }
)

tap.test( 'connectingEvent with debug output',
  function ( t ) {
    var connectingEvent

    db.base.options.debug = true
    connectingEvent = connecting.bind( db )
    connectingEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'connecting to mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message'
    )

    t.end()
  }
)

tap.test( 'connectingEvent with custom logger',
  function ( t ) {
    var connectingEvent

    var logger = {
      log: function () {
        var args = Array.from( arguments );

        console.log( args.join( ' ' ) )
      }
    }

    db.base.options.debug = true
    connectingEvent = connecting.bind( db, logger )
    connectingEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'connecting to mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message using a custom logger'
    )

    t.end()
  }
)
