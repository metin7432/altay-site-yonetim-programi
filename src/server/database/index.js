import { Sequelize } from "sequelize";
import configFile from "../config";

const env = 'development';
const config = configFile[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

const db = {
    sequelize,
}

export default db;


