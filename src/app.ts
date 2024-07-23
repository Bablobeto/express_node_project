import "reflect-metadata";
import express, { Application } from "express";
import path from "path";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import * as dotenv from "dotenv";
import { v1Routes, v1RoutePrefix } from "./routes";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { errorHandler, notFound, request, response } from "./middlewares";

// configure environment
process.env.NODE_ENV! === "test"
  ? dotenv.config({ path: path.resolve(process.cwd(), ".env.test") })
  : dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// create express app
const app: Application = express();

// integrate middlewares
app.use(request);
app.use(response);
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// define routes
app.use(v1RoutePrefix, v1Routes);

// catch 404 and forward to error handler
app.use(notFound);
// error handler
// app.use(errorHandler);

export default app;
