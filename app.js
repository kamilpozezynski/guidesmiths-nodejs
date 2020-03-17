
import express from 'express'
import centralRouter from "./config/routeManager";

const app = express();
const port = 3000;

app.use("/api", centralRouter);
app.get("/", (req, res) => res.send("Nothing too see!"));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
