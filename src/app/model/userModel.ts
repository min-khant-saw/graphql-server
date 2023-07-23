import User from "../schema/user";

interface UserInput {
  name: string;
  email: string;
  token: string;
}

class UserModel implements UserInput {
  name: string;
  email: string;
  token: string;

  constructor(name: string, email: string, token: string) {
    this.name = name;
    this.email = email;
    this.token = token;
  }

  public async Create(): Promise<void> {
    await User.create({
      name: this.name,
      email: this.email,
      token: this.token,
    });
  }
}

export default UserModel;
