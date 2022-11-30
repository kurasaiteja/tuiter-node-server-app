// To run MongoDB - mongod --config /opt/homebrew/etc/mongod.conf

import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = "mongodb+srv://kurasaiteja:kura@cluster0.cl2eu4z.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port,
                app.settings.env);
});