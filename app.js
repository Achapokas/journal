import 'dotenv/config'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import journalsRouter from './routes/journalsRouter.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Body parsing middleware - must come BEFORE routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/journals', journalsRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Every thrown error in the application or the previous middleware function calling `next`
//  with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
});