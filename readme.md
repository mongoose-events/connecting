# mongoose-events-connecting
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a mongoose event handler that handles the connecting event

## table of contents
* [installation](#installation)
* [usage](#usage)
    * [basic](#basic)
    * [with a logging service](#with-a-logging-service)
* [license](#license)

## installation
```javascript
npm install mongoose-events-connecting
```

## usage
### basic
```javascript
var connectingEvent = require( 'mongoose-events-connecting' )
var db

db = mongoose.connection
db.on( 'connecting', connectingEvent.bind( db ) )
```

### with a logging service
```javascript
var connectingEvent = require( 'mongoose-events-connecting' )
var db

// logging service needs to have a .log( arg1[, arg2[, ...] ] ) method
var logger = require( 'your-logger' )

db = mongoose.connection
db.on( 'connecting', connectingEvent.bind( db, logger ) )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/mongoose-events/connecting/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/mongoose-events/connecting?branch=master
[mit-license]: https://raw.githubusercontent.com/mongoose-events/connecting/master/license.txt
[npm-image]: https://img.shields.io/npm/v/mongoose-events-connecting.svg
[npm-url]: https://www.npmjs.com/package/mongoose-events-connecting
[nsp-image]: https://nodesecurity.io/orgs/mongoose-events/projects/4b511b4c-b1dc-4664-961c-6b00188d8a2c/badge
[nsp-url]: https://nodesecurity.io/orgs/mongoose-events/projects/4b511b4c-b1dc-4664-961c-6b00188d8a2c
[travis-image]: https://travis-ci.org/mongoose-events/connecting.svg?branch=master
[travis-url]: https://travis-ci.org/mongoose-events/connecting
