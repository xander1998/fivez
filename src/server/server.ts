import "reflect-metadata"

// Managers
import { PlayerManager } from "./managers/players";
import { ConnectionManager } from "./managers/connections";

const playerManager = new PlayerManager();
new ConnectionManager(playerManager);