import express, { json, Request, Response } from "express"
import router from "./routes/index";
import connectDB from "./database";
import dotenv from 'dotenv';
//import { syncDatabase } from "./syncDatabase";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

//syncDatabase();
app.use(cors());
app.use(json());

app.use(router);

app.use((req: Request, res: Response) => {
    res.status(404).send("Route not found");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});