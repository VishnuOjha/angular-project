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
const service = require("../service/AdminService")
const Controller = require("./Controller")

class Admin extends Controller {
    constructor() {
        super(service)
    }    
}

module.exports = new Admin()
