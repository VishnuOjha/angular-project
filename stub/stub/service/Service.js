const config = require("../config/service.config")
const HTTPError = require("../exceptions/HTTPError")
const HTTPInternalServerError = require("../exceptions/HTTPInternalServerError")
const data = require("../data.json")

/**
 * Service helper functions
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @returns {Object}
 * @name Service
 * @alias Service methods
 * @param {Null}
 *
 */
class Service {
    /**
     * This method returns the list of User Contact Info Service
     *
     * @returns {json} result
     * @name ListAll
     * @param null
     *
     */
    async ListAll(path, limit = 0, offset = 0) {
        let params = {
            limit: limit,
            offset: offset,
        }

        try {
            let url = path.split("/")[1];
            return data.Data[url].list_all
        } catch (err) {
            console.log(err)
            this.handle(err)
        }
    }

    /**
     * This method details of specific User Contact Info Service
     *
     * @returns {json} result
     * @name List
     * @param key
     *
     */
    async List(path) {
        try {
            let url = path.split("/")[1];
            return data.Data[url].list
        } catch (err) {
            console.log(err)
            this.handle(err)
        }
    }

    /**
     * This method creates a new User Contact Info Service
     *
     * @returns {json} result
     * @name Create
     * @param null
     *
     */
    async Create(path, reqdata) {
        try {
            let url = path.split("/")[1];
            let stubData = data.Data[url].create
            return stubData
        } catch (err) {
            console.log(err)
            this.handle(err)
        }
    }

    /**
     * This method updates User Contact Info Service details
     *
     * @returns {json} result
     * @name Update
     * @param null
     *
     */
    async Update(path, reqdata) {
        try {
            let url = path.split("/")[1];
            let stubData = data.Data[url].create
            return stubData
        } catch (err) {
            console.log(err)
            this.handle(err)
        }
    }

    /**
     * This method sets enable flag on the User Contact Info Service to true
     *
     * @returns {json} result
     * @name Enable
     * @param null
     *
     */
    async Patch(path) {
        try {
            let url = path.split("/")[1];
            return data.Data[url].patch
        } catch (err) {
            this.handle(err)
        }
    }

    /**
     * This method deletes the User Contact Info Service permanently.
     * there is no undo delete operation.
     *
     * @returns {json} result
     * @name Delete
     * @param null
     *
     */
    async Delete(path) {
        try {
            let url = path.split("/")[1];
            return data.Data[url].delete
        } catch (err) {
            this.handle(err)
        }
    }

    handle(err) {
        if (err instanceof HTTPError) {
            throw new HTTPError(err.response.data.status,
                err.response.data.message)
        }
        else {
            throw new HTTPInternalServerError()
        }
    }

}

module.exports = Service
