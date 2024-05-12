import { Sequelize } from "sequelize-typescript";
import Note  from "../models/note";
import * as config from "../dbConfig";

export const connection = new Sequelize({
  dialect: "postgres",
  host: config.DBhost || "localhost",
  username: config.DBuser || "postgres",
  password: config.DBpassword || "123",
  database: config.database,
  logging: false,
  models: [Note],
});