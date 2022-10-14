/**
 * This File Serves As The routes definition for
 * managing Action 
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Action 
 * @alias Action 
 * @param Null
 *
 */

const Action = require("../controllers/Action")

const Express = require("express")
const Router = Express.Router()

/* List all Action */
Router.get("/action", Action.ListAll)

/* List the given Action */
Router.get("/action/:key", Action.List)

/* Create a Action */
Router.post("/action", Action.Create)

/* Update a Action */
Router.put("/action/:key", Action.Update)

/* Enable a Action */
Router.patch("/action/:key", Action.Patch)

/* Delete a Action */
Router.delete("/action/:key", Action.Delete)

module.exports = Router
