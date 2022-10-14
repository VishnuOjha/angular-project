/**
 * This File Serves As The routes definition for
 * managing Operation registration
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Operation registration
 * @alias Operation registration
 * @param Null
 *
 */

const Operation = require("../controllers/Operation")

const Express = require("express")
const Router = Express.Router()

/* List all Operation */
Router.get("/operation", Operation.ListAll)

/* List the given Operation */
Router.get("/operation/:key", Operation.List)

/* Create a Operation */
Router.post("/operation", Operation.Create)

/* Update a Operation */
Router.put("/operation/:key", Operation.Update)

/* Enable a Operation */
Router.patch("/operation/:key", Operation.Patch)

/* Delete a Operation */
Router.delete("/operation/:key", Operation.Delete)

module.exports = Router
