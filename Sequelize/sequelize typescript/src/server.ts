import dotenv from 'dotenv'

dotenv.config({
	path: `${__dirname}/env/.${process.env.NODE_ENV}.env`
})


import express from "express";
import todoRoutes from "./routes/notes";
import { connection } from "./db/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err: any) => {
    console.log("Error", err);
  });