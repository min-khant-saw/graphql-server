import { getModelForClass, pre, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

@pre<User>("save", function (next) {
  const now = new Date();
  this.updatedAt = now;
  next();
})
class User extends TimeStamps {
  @prop({ required: true })
  public name?: string;

  @prop({ required: true, unique: true })
  public email?: string;

  @prop({ required: true })
  public token?: string;
}

export default getModelForClass(User);
