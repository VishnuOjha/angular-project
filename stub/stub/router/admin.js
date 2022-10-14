/**
 * This File Serves As The routes definition for
 * managing Admin registration
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Admin registration
 * @alias Admin registration
 * @param Null
 *
 */

const Admin = require("../controllers/Admin")

const Express = require("express")
const Router = Express.Router()

/* List all Admin */
Router.get("/admin", Admin.ListAll)

/* List the given Admin */
Router.get("/admin/:key", Admin.List)

/* Create a Admin */
Router.post("/admin", Admin.Create)

/* Update a Admin */
Router.put("/admin/:key", Admin.Update)

/* Enable a Admin */
Router.patch("/admin/:key", Admin.Patch)

/* Delete a Admin */
Router.delete("/admin/:key", Admin.Delete)

module.exports = Router
