/**
 * AccessKey
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name AccessKey
 * @alias AccessKey
 * @param {Null}
 *
 */
const service = require("../service/AccessKeyService")
const Controller = require("./Controller")

class AccessKey extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new AccessKey()
