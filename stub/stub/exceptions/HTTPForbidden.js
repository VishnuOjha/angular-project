/**
* HTTPForbidden Exception
* 
* @author Vikas Sood <vikas@eno8.com>
* @returns {Object}
* @name HTTPForbidden
* @alias HTTPForbidden Exception
* @param {Null}
* 
*/
const HTTPError = require('./HTTPError')

class HTTPForbidden extends HTTPError {
    constructor(message='Access Denied') {
        super(403, message)
    }
}

module.exports = HTTPForbidden;
