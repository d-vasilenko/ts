class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  };
  greed(): void {
    console.log(`Hello, ${this.name}!`);
  };
  isAdult(): boolean {
    return this.age >= 18;
  }
}

const user: User = new User('denis', 44);

user.greed();
console.log(user.isAdult());