/**
 * Resource
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name Resource
 * @alias Resource
 * @param {Null}
 *
 */
const service = require("../service/ResourceService")
const Controller = require("./Controller")

class Resource extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new Resource()
