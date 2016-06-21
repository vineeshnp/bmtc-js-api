# BMTC Node JS Module


Bangalore Metropolitan Transport Corporation BMTC recently released its Intelligent Transport System (ITS) , But as of now there is no public api available . This is an reverse engineering approach to solve the issue

API Reference : https://github.com/tachyons/bmtc-api



## Installation

Add this line to your application's Gemfile:

```javascript
npm install bmtc-js-api
```

And then include this in your project:


```javascript
var bmtc = require('bmtc-js-api');
```

## Usage

Search for bustop
```javascript
bmtc.searchStop(<stop>,function(body){
  console.log(body.toString())
});

eg:
bmtc.searchStop('JP Nagar',function(body){
  console.log('Unit Test for busStop');
  console.log(body.toString())
});
```
Nearest BusStop
```javascript
bmtc.nearestStop(<latitude>,<longitude>,function(body){
  console.log(body.toString())
});

eg:
bmtc.nearestStop(12.9566695,77.6867077,function(body){
  console.log('Unit Test for nearestStop');
  console.log(body.toString())
});
```


Buses in a stop
```javascript
bmtc.stopDetails(<bus_stop_code>,function(res){
  console.log(res);
});

eg:
bmtc.stopDetails('9234',function(res){
  console.log('Unit Test for stop');
  console.log(res);
});
```

Get brief details of a bus routes

```javascript
bmtc.routeWise(<direction>,<route number>,function(res){
  console.log(res);
});

eg
bmtc.routeWise('up','500CA',function(res){
  console.log('Unit Test for routeMap');
  console.log(res);
});
```

Get complete details of a bus routes

```javascript
bmtc.routeMap(<direction>,<route number>,function(res){
  console.log(res);
});
eg
bmtc.routeMap('up','500CA',function(res){
  console.log('Unit Test for routeMap');
  console.log(res);
});
```

Get Trip fare

```javascript
bmtc.tripFare(<source station>, <destination station>, <service types>, <number of adults>,function(res){
  console.log('Unit Test for tripFare');
  console.log(res);
});
eg
bmtc.tripFare('Banashankari TTMC', 'Central Silk Board', 'vajra', 1,function(res){
  console.log('Unit Test for tripFare');
  console.log(res);
});
```

Service types can be either
* oridninary
* vajra
* vayu_vajra
* atal_sarige
* nice_service
* bengaluru_darshini

## Development

You can use this module on your `nodeJS` projects as well as other JS projects like `ionic`,`angular`,`angular2` etc...

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/vineeshnp/bmtc-js-api.

## Reference
https://github.com/tachyons/bmtc-api
https://github.com/tvsijin/bmtc-api-php

## License

The module is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
