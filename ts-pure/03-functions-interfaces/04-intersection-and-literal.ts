interface IName {
  name: string;
}

interface IAge {
  age: number;
}

type Person = IName & IAge;

const person: Person = {
  name: 'di',
  age: 490,
}

console.log(person);

interface IAddress {
  street: string;
  city?: string;
}

const user = {
  id: 1,
  name: 'vasia',
}

type UserWithAddress = typeof user & IAddress;

const user4: UserWithAddress = {
  ...user,
  street: '123',
  city: 'some city',
}

console.log(user4);

type Status = 'success' | 'error' | 'pending';
type Result = 0 | 1 | 2;

const f: Status = 'success';
const r: Result = 2;

