import { GetIdentifier } from "../utils";
import { GetConnection } from "../database";
import { User } from "../database/entity/user";
import { connect } from "http2";

export class Player {

  Name : string;
  Handle : string;
  User : User;

  constructor(name : string, handle : string) {
    this.Name = name;
    this.Handle = handle;
  }

  public async Load() : Promise<Player> {
    const license = GetIdentifier(this.Handle, "license")

    await GetConnection().then(async connection => {

      let user = await connection.getRepository(User).findOne({ license })
      
      if (user == undefined) {
        user = new User();
        user.name = this.Name;
        user.license = license;
        connection.getRepository(User).save(user);
      }

      this.User = user;
      connection.close();
    })

    return this;
  }

  public FireEvent(event, args) : void {
    TriggerServerEvent(event, this.Handle, args);
  }

  public Ban(reason : string) : void {
    // Update User Ban Status
    DropPlayer(this.Handle, `Banned from the server. [${reason}]`);
  }

  public Kick(reason : string) : void {
    DropPlayer(this.Handle, `Kicked from the server. [${reason}]`);
  }

}