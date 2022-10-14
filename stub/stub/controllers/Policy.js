/**
 * Admin
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name Admin
 * @alias Admin
 * @param {Null}
 *
 */
const service = require("../service/PolicyService")
const Controller = require("./Controller")

class Policy extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new Policy()
