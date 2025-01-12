import express, { Request, Response } from "express"
import router from "./routes/index";
import connectDB from "./database";
import dotenv from 'dotenv';
import { syncDatabase } from "./syncDatabase";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

syncDatabase();

app.use(router);

app.use((req: Request, res: Response) => {
    res.status(404).send("Route not found");
});

app.listen(port, () => {
    console.log('App listening on port ${port}');
});