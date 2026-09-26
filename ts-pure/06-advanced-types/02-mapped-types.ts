interface IPerson {
  name: string;
  age: number;
  address: string;
}

type PartialPerson = {
  [P in keyof IPerson]?: IPerson[P];
}

const partialUser: PartialPerson = {
  name: 'some name',
};

//--------
type ReadonlyPerson<T> = {
  readonly [P in keyof T]: T[P];
}

const readonlyUser: ReadonlyPerson<IPerson> = {
  name: 'den',
  age: 49,
  address: 'some address',
}

// readonlyUser.age = 40;
// --------------

type StringPropertyValue<T> = {
  [P in keyof T]: string;
}

const strPerson: StringPropertyValue<IPerson> = {
  name: 'another name',
  age: '49',
  address: 'fdfasfd',
}

