/**
 * This File Serves As The Entry Point Into Our
 * ProgramConfigService
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Index
 * @alias Bootstrap
 * @param Null
 *
 */

const Service = require("./Service")
const config = require("./config/service.config.js")
const accessKey = require("./router/accessKey");
const accessLog = require("./router/accessLog");
const action = require("./router/action");
const admin = require("./router/admin");
const apikey = require("./router/apikey");
const operation = require("./router/operation");
const permission = require("./router/permission");
const policy = require("./router/policy");
const resource = require("./router/resource");
const roles = require("./router/roles");


class StubService extends Service {
    constructor(name) {
        super(name)
        this.initRoutes()
    }

    initRoutes() {
        /* Load the middleware */
        this.App.use(config.SERVICE_BASE, accessKey)
        this.App.use(config.SERVICE_BASE, accessLog)
        this.App.use(config.SERVICE_BASE, action)
        this.App.use(config.SERVICE_BASE, admin)
        this.App.use(config.SERVICE_BASE, apikey)
        this.App.use(config.SERVICE_BASE, operation)
        this.App.use(config.SERVICE_BASE, permission)
        this.App.use(config.SERVICE_BASE, policy)
        this.App.use(config.SERVICE_BASE, resource)
        this.App.use(config.SERVICE_BASE, roles)
    }
    start() {
        super.start()
    }
}

module.exports = new StubService(config.SERVICE_NAME)
