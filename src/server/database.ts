import { createConnection, Connection } from "typeorm";

// Entities
import { User } from "./database/entity/user";
import { Character } from "./database/entity/character";

// Subscribers
import { UserSubscriber } from "./database/subscriber/users";

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
      User,
      Character
    ],
    "migrations": [],
    "subscribers": [
      UserSubscriber
    ]
  })
}