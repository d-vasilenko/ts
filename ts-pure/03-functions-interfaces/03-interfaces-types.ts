interface IUserInterface {
  name: string;
  age: number;
  email: string;
  greet(): string;
  //greet(): () => string;
}

const user: IUserInterface = {
  name: "some name",
  age: 33,
  email: "some@email.com",
  greet() {
    return `Hello, ${this.name}`
  }
}

console.log(user.greet());

type UserType = {
  name: string;
  age: number;
  email: string;
  greet(): string;
};

const user2: UserType = {
  name: "some name",
  age: 33,
  email: "some@email.com",
  greet() {
    return `Hello, ${this.name}`
  }
}

console.log(user2.greet());

interface IExtenderUserInterface extends IUserInterface {
  role: string;
}

interface IExtenderUserInterface {
  isAdmin: boolean;
}

const user3: IExtenderUserInterface = {
  name: "some name",
  age: 33,
  email: "some@email.com",
  role: 'admin',
  isAdmin: true,
  greet() {
    return `Hello, ${this.name}`
  }
}


console.log(user3.greet());

