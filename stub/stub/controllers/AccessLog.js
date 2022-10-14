/**
 * AccessLog
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name AccessLog
 * @alias AccessLog
 * @param {Null}
 *
 */
const service = require("../service/AccessLogService")
const Controller = require("./Controller")

class AccessLog extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new AccessLog()
