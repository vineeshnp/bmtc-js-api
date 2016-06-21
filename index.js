var http = require('http')
var request = require('request');

//Local Dependencies
var globals = require('./globals.js')

exports.nearestStop = function(lat,long,callback){
  http.get(globals.baseUrl()+'busstops/stopnearby/lat/'+lat+'/lon/'+long+'/rad/2', (res) => {
  res.on("data", function(body) {
    callback(body)
    });
  }).on('error', (e) => {
    callback('error '+ e.message)
  });
}

exports.searchStop = function(key,callback){
  http.get(globals.baseUrl()+'busstops/stopsearch/name/'+key, (res) => {
  res.on("data", function(body) {
    callback(body)
    });
  }).on('error', (e) => {
    callback('error '+ e.message)
  });
}

exports.routeWise = function(direction,routeNO,callback){
  request.post(
    globals.baseUrl()+'itsroutewise/details',
    {
      form:{
        'direction' : direction,
        'routeNO' : routeNO
      }
    },
    function (error, response, body) {
      if(error){
        callback(error)
      }
      else{
        console.log('Got Response: ', response.statusCode == 200)
        callback(body)
        }
      }
    )
}

exports.routeMap = function(direction,routeNO,callback){
  request.post(
    globals.baseUrl()+'/routemap/details',
    {
      form:{
        'direction' : direction,
        'routeNO' : routeNO
      }
    },
    function (error, response, body) {
      if(error){
        callback(error)
      }
      else{
        console.log('Got Response: ', response.statusCode)
        callback(body)
        }
      }
    )
}

exports.stopDetails = function(stopId,callback){
  request.post(
    globals.baseUrl()+'/itsstopwise/details',
    {
      form:{
        'stopID' :stopId
      }
    },
    function (error, response, body) {
      if(error){
        callback(error)
      }
      else{
        console.log('Got Response: ', response.statusCode )
        callback(body)
        }
      }
    )
}

exports.tripFare = function( source, destination, noOfAdults, serviceType, callback){
  request.post(
    globals.baseUrl()+'/tripfare/details',
    {
      form:{
        'adults' : noOfAdults,
        'destination' : destination,
        'serviceType' : globals.serviceType(serviceType),
        'source' : source
      }
    },
    function (error, response, body) {
      if(error){
        callback(error)
      }
      else{
        console.log('Got Response: ', response.statusCode )
        callback(body)
        }
      }
    )
}
