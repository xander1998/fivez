import "reflect-metadata"
import { GetConnection } from "./database";
import { User } from "./database/entity/user";

GetConnection().then(async connection => {

  const user = new User();
  user.name = "Xander1998";
  user.license = "license:new";

  const userRepo = connection.getRepository(User);

  await userRepo.save(user).then(() => {
    console.log("INSERTING USER")
  }).catch((error) => console.log(`ERROR: ${error}`));

}).catch(error => console.log(`ERROR: ${error}`));