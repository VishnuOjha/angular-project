/**
 * This File Serves As The routes definition for
 * managing Roles registration
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Roles registration
 * @alias Roles registration
 * @param Null
 *
 */

const Roles = require("../controllers/Roles")

const Express = require("express")
const Router = Express.Router()

/* List all Roles */
Router.get("/role", Roles.ListAll)

/* List the given Roles */
Router.get("/role/:key", Roles.List)

/* Create a Roles */
Router.post("/role", Roles.Create)

/* Update a Roles */
Router.put("/role/:key", Roles.Update)

/* Enable a Roles */
Router.patch("/role/:key", Roles.Patch)

/* Delete a Roles */
Router.delete("/role/:key", Roles.Delete)

module.exports = Router
