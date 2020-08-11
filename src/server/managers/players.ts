import { Player } from "../models/player";

export class PlayerManager {

  Players : Array<Player>;

  constructor() {
    this.Players = new Array<Player>();
    console.log("LOADED PLAYER MANAGER");
  }

  public AddPlayer(player : Player) : void {
    this.Players.push(player);
  }

  public RemovePlayer(player : Player) : void {
    for (let a = 0; a < this.Players.length; a++) {
      if (this.Players[a].Handle == player.Handle) {
        this.Players.slice(a, a);
        console.log(JSON.stringify(this.Players));
        break;
      }
    }
  }

  public GetPlayer(handle : string) : Player {
    for (let a = 0; a < this.Players.length; a++) {
      if (this.Players[a].Handle == handle) {
        return this.Players[a];
      }
    }
    return null;
  }

}