exports.baseUrl = function() {
  var baseUrl = 'http://bmtcmob.hostg.in/api/'
  return baseUrl
}
exports.serviceType = function(type) {
  switch (type) {
    case 'ordinary':
        return 1;
    break;
    case 'vayuVajra':
        return 2;
      break;
    case 'vajra':
        return 3;
      break;
    case 'atalSarige':
        return 5;
      break;
    case 'niceService':
        return 11;
      break;
    case 'bengaluruDarshini':
        return 15;
      break;
    default:
        return 1;

  }
}
