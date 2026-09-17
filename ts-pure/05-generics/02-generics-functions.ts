function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const getFirstEl = <T,>(arr: T[]): T | undefined => {
  return arr[0];
}


const numArray: number[] = [3, 4, 5];
const strArray: Array<string> = ['some', 'any'];

const firstElNumArray = getFirstElement(numArray);
const firstElStrArray = getFirstEl(strArray);

console.log(firstElNumArray);
console.log(firstElStrArray);


class Box<T> {
  private value: T;
  constructor(value: T) {
    this.value = value;
  };
  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(20);
console.log(numberBox.getValue());

const stringBox = new Box<string>('some string');
console.log(stringBox.getValue());