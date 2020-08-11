import { EntitySubscriberInterface, InsertEvent, EventSubscriber } from "typeorm";
import { User } from "../entity/user";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  beforeInsert(event : InsertEvent<User>) : void {
    //console.log("CALLING THIS BEFORE INSERTING USER!");
  }
}