/**
 * This File Serves As The routes definition for
 * managing AccessLog registration
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name AccessLog registration
 * @alias AccessLog registration
 * @param Null
 *
 */

const AccessLog = require("../controllers/AccessLog")

const Express = require("express")
const Router = Express.Router()

/* List all AccessLog */
Router.get("/access_log", AccessLog.ListAll)

/* List the given AccessLog */
Router.get("/access_log/:key", AccessLog.List)

/* Create a AccessLog */
Router.post("/access_log", AccessLog.Create)

/* Update a AccessLog */
Router.put("/access_log/:key", AccessLog.Update)

/* Enable a AccessLog */
Router.patch("/access_log/:key", AccessLog.Patch)

/* Delete a AccessLog */
Router.delete("/access_log/:key", AccessLog.Delete)

module.exports = Router
