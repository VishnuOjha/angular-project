const config = require("../config/service.config")
/**
 * The Base Controller: All other controllers extends from this controller
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name Controller
 * @alias BaseController
 * @param {Null}
 *
 */
class Controller {
    constructor(service) {
        this.service = service
    }

    /**
     * List All
     *
     * @returns {null}
     * @name ListAll
     * @param {Object} req
     * @param {Object} res
     *
     */
    ListAll = async (req, res) => {
        console.log(`[${config.SERVICE_NAME}] List all ${req.path}`)
        let data = {};
        const limit = req.query.limit ? parseInt(req.query.limit) : 0
        const offset = req.query.offset ? parseInt(req.query.offset) : 0

        try {
            data = await this.service.ListAll(req.path, limit, offset)

            this.response(res, 200, "OK", data)
        } catch (err) {
            this.response(res, err.status, err.message, data, err)
        }
    }

    /**
     * List by key
     *
     * @returns {null}
     * @name List
     * @param {Object} req
     * @param {Object} res
     *
     */
    List = async (req, res) => {
        let data = {}
        console.log(`[${config.SERVICE_NAME}] List ${req.path}`)

        try {
            data = await this.service.List(req.path)
            this.response(res, 200, "OK", data)
        } catch (err) {
            this.response(res, err.status, err.message, data, err)
        }
    }

    /**
     * Create new
     *
     * @returns {null}
     * @name CreateRole
     * @param {Object} req
     * @param {Object} res
     *
     */
    Create = async (req, res) => {
        let data = {}
        console.log(`[${config.SERVICE_NAME}] Create ${req.path}`)

        try {
            data = await this.service.Create(req.path, req.body)
            this.response(res, 200, "OK", data)
        } catch (err) {
            this.response(res, err.status, err.message, data, err)
        }
    }

    /**
     * Update by key
     *
     * @returns {null}
     * @name UpdateKey
     * @param {Object} req
     * @param {Object} res
     *
     */
    Update = async (req, res) => {
        let data = {}
        console.log(`[${config.SERVICE_NAME}] Update ${req.path}`)
        /**
         * TODO
         * validate the incoming data
         */
        try {
            data = await this.service.Update(req.path, req.body)
            this.response(res, 200, "OK", data)
        } catch (err) {
            this.response(res, err.status, err.message, data, err)
        }
    }

    /**
     * Patch by key
     *
     * @returns {null}
     * @name EnableRole
     * @param {Object} req
     * @param {Object} res
     *
     */
    Patch = async (req, res) => {
        let data = {}
        console.log(`[${config.SERVICE_NAME}] Enable ${req.path}`)
        try {
            data = await this.service.Patch(req.path)
            this.response(res, 200, "OK", data)
        } catch (err) {
            this.response(res, err.status, err.message, data, err)
        }
    }

    /**
     * delete the given User Program
     *
     * @returns {null}
     * @name DeleteRole
     * @param {Object} req
     * @param {Object} res
     *
     */
    Delete = async (req, res) => {
        let data = {}
        console.log(`[${config.SERVICE_NAME}] Delete ${req.path}`)
        try {
            data = await this.service.Delete(req.path)
            this.response(res, 200, "OK", data)
        } catch (err) {
            this.response(res, err.status, err.message, data, err)
        }
    }
    response(
        res,
        status = 200,
        message = "",
        data = {},
        error = {},
        type = "json"
    ) {
        /* Prepare The Response Payload */
        const Response = { status, message, data, error }

        /* Send Back An HTTP Response */
        res.status(status)[type](Response)
        res.end()
        return
    }
}

module.exports = Controller
