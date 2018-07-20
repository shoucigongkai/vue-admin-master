const getApiServer = function (val) {
	// console.log('process.env.NODE_ENV==>', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development' && val === 1) {
    return 'http://192.168.1.150:7070/'
  } else if (process.env.NODE_ENV === 'development' && val === 2) {
    return 'http://192.168.1.200:6060/'
  } else if (process.env.NODE_ENV === 'testing' && val === 3) {
    return 'http://192.168.1.188:8800/'
  } else {
    return 'http://47.92.83.246:8060/'
  }
};
exports.getApiServer = getApiServer
