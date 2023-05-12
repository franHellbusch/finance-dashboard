import app from "./src/app.init";
import { MongoConnect } from "./src/common/db/connect";

MongoConnect()
    .then(async () => {
        console.info("MongoDB connection established");
        app.listen();
    })
    .catch((err) => console.error(err));
