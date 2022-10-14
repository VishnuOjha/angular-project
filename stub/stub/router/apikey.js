/**
 * This File Serves As The routes definition for
 * managing ApiKey registration
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name ApiKey registration
 * @alias ApiKey registration
 * @param Null
 *
 */

const ApiKey = require("../controllers/Apikey")

const Express = require("express")
const Router = Express.Router()

/* List all ApiKey */
Router.get("/api_key", ApiKey.ListAll)

/* List the given ApiKey */
Router.get("/api_key/:key", ApiKey.List)

/* Create a ApiKey */
Router.post("/api_key", ApiKey.Create)

/* Update a ApiKey */
Router.put("/api_key/:key", ApiKey.Update)

/* Enable a ApiKey */
Router.patch("/api_key/:key", ApiKey.Patch)

/* Delete a ApiKey */
Router.delete("/api_key/:key", ApiKey.Delete)

module.exports = Router
