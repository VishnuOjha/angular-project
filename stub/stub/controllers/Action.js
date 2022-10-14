/**
 * Action
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name Action
 * @alias Action
 * @param {Null}
 *
 */
const service = require("../service/ActionService")
const Controller = require("./Controller")

class Action extends Controller {
    constructor() {
        super(service)
    }
}

module.exports = new Action()
