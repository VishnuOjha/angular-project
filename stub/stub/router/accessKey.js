/**
 * This File Serves As The routes definition for
 * managing AccessKey 
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name AccessKey 
 * @alias AccessKey 
 * @param Null
 *
 */

const AccessKey = require("../controllers/AccessKey")

const Express = require("express")
const Router = Express.Router()

/* List all AccessKey */
Router.get("/access_key", AccessKey.ListAll)

/* List the given AccessKey */
Router.get("/access_key/:key", AccessKey.List)

/* Create a AccessKey */
Router.post("/access_key", AccessKey.Create)

/* Update a AccessKey */
Router.put("/access_key/:key", AccessKey.Update)

/* Enable a AccessKey */
Router.patch("/access_key/:key", AccessKey.Patch)

/* Delete a AccessKey */
Router.delete("/access_key/:key", AccessKey.Delete)


module.exports = Router
