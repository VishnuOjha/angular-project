/**
 * This File Serves As The routes definition for
 * managing Policy registration
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Policy registration
 * @alias Policy registration
 * @param Null
 *
 */

const Policy = require("../controllers/Policy")

const Express = require("express")
const Router = Express.Router()

/* List all Policy */
Router.get("/policy", Policy.ListAll)

/* List the given Policy */
Router.get("/policy/:key", Policy.List)

/* Create a Policy */
Router.post("/policy", Policy.Create)

/* Update a Policy */
Router.put("/policy/:key", Policy.Update)

/* Enable a Policy */
Router.patch("/policy/:key", Policy.Patch)

/* Delete a Policy */
Router.delete("/policy/:key", Policy.Delete)

// check Policy exist or not by email
//

module.exports = Router
