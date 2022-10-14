/**
 * Permission
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name Permission
 * @alias Permission
 * @param {Null}
 *
 */
const service = require("../service/PermissionService")
const Controller = require("./Controller")

class Permission extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new Permission()
