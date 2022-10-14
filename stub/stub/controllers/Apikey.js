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
const service = require("../service/ApikeyService")
const Controller = require("./Controller")

class Apikey extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new Apikey()
