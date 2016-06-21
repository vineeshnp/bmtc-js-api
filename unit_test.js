var bmtc = require('./index.js')
//unit test

bmtc.nearestStop(12.9566695,77.6867077,function(body){
  console.log('Unit Test for nearestStop');
  console.log(body.toString())
});
bmtc.searchStop('JP Nagar',function(body){
  console.log('Unit Test for busStop');
  console.log(body.toString())
});
bmtc.routeWise('up','500CA',function(res){
  console.log('Unit Test for routeWise');
  console.log(res);
});

bmtc.routeMap('up','500CA',function(res){
  console.log('Unit Test for routeMap');
  console.log(res);
});

bmtc.stopDetails('9234',function(res){
  console.log('Unit Test for stop');
  console.log(res);
});

bmtc.tripFare('Banashankari TTMC', 'Central Silk Board', 'vajra', 1,function(res){
  console.log('Unit Test for tripFare');
  console.log(res);
});
