/**
 * Roles
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name Roles
 * @alias Roles
 * @param {Null}
 *
 */
const service = require("../service/RolesService")
const Controller = require("./Controller")

class Roles extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new Roles()
