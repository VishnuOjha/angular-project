/**
 * This File Serves As The Base Entity for V3 Services
 *
 * @author Vikas Sood <vikas@eno8.com>
 * @return {null}
 * @name Index
 * @alias Bootstrap
 * @param Null
 *
 */

const Express = require('express');
const BodyParser = require('body-parser');
const serviceConfig = require('./config/service.config.js')
class Service {
    constructor(name) {
        /* Service Name */
        this.name = name;
        this.App = Express()

        /* Load In Some Middleware */
        this.App.use(BodyParser.json())
    }

    /**
     * This method starts listening for incoming requests
     *
     * @name start
     *
     */
    start() {
        try {
            /* LIFTOFF!!!! */
            this.App.listen(process.env.port || 3000, () => {
                console.log(`[${this.name}] Listening on PORT 3000`)
            });
        } catch (Exception) {
            console.log(Exception)
            throw new Error(`[${this.name}] Failed to start Service ${Exception}`)
        }        
    }
}

module.exports = Service;