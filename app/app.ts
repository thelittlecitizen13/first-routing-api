import "reflect-metadata"; 
import { createExpressServer } from "routing-controllers";
import { UserController } from "../controllers/UserController";
import bodyParser from "body-parser";


// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [UserController] // we specify controllers we want to use
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// run express application on port 3000
app.listen(3000);