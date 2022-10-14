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
const service = require("../service/OperationService")
const Controller = require("./Controller")

class Operation extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new Operation()
