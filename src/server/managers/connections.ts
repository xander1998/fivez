import { GetIdentifier } from "../utils";
import { GetConnection } from "../database";
import { User } from "../database/entity/user";
import { Player } from "../models/player";
import { PlayerManager } from "./players";

// Config
import serverConfig from "../configs/server.json"

export class ConnectionManager {

  playerManager : PlayerManager

  constructor(pManager : PlayerManager) {
    this.playerManager = pManager;

    AddEventHandler("playerConnecting", this.eventConnect);
    AddEventHandler("playerDropped", this.eventDisconnect);

    console.log("LOADED CONNECTION MANAGER");
  }

  private async eventConnect(name : string, setKickReason, deferrals) : Promise<void> {
    deferrals.defer();
    const src = source;
    const license = GetIdentifier(src, "license")
    const player = await new Player(name, src).Load();

    if (serverConfig.isWhitelisted) {
      if (!player.User.isWhitelisted) {
        deferrals.done("You are not whitelisted!");
      }
    }

    if (player.User.isBanned) {
      deferrals.done("You have been banned from the server!");
    }

    console.log("BEFORE PMANAGER");

    this.playerManager.AddPlayer(player);

    deferrals.done("DONE");
  }

  private eventDisconnect(reason : string) : void {
    const src = source;
    const player = this.playerManager.GetPlayer(src);
    this.playerManager.RemovePlayer(player);
  }

}