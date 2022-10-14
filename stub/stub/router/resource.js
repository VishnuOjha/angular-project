/**
 * This File Serves As The routes definition for
 * managing Resource 
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Resource 
 * @alias Resource 
 * @param Null
 *
 */

const Resource = require("../controllers/Resource")

const Express = require("express")
const Router = Express.Router()

/* List all Resource */
Router.get("/resource", Resource.ListAll)

/* List the given Resource */
Router.get("/resource/:key", Resource.List)

/* Create a Resource */
Router.post("/resource", Resource.Create)

/* Update a Resource */
Router.put("/resource/:key", Resource.Update)

/* Enable a Resource */
Router.patch("/resource/:key", Resource.Patch)

/* Delete a Resource */
Router.delete("/resource/:key", Resource.Delete)

module.exports = Router
