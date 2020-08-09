import { createConnection, Connection } from "typeorm";

// Entities
import { User } from "./database/entity/user";

export function GetConnection() : Promise<Connection> {
  return createConnection({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "fivez",
    "synchronize": true,
    "logging": false,
    "entities": [
      User
    ],
    "migrations": [],
    "subscribers": []
  })
}