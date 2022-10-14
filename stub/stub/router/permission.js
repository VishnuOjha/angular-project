/**
 * This File Serves As The routes definition for
 * managing Permission
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Permission 
 * @alias Permission 
 * @param Null
 *
 */

const Permission = require("../controllers/Permission")

const Express = require("express")
const Router = Express.Router()

/* List all Permission */
Router.get("/permission", Permission.ListAll)

/* List the given Permission */
Router.get("/permission/:key", Permission.List)

/* Create a Permission */
Router.post("/permission", Permission.Create)

/* Update a Permission */
Router.put("/permission/:key", Permission.Update)

/* Enable a Permission */
Router.patch("/permission/:key", Permission.Patch)

/* Delete a Permission */
Router.delete("/permission/:key", Permission.Delete)

module.exports = Router
