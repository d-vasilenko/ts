function logValue<T extends { value: string }>(obj: T): void {
  console.log(obj.value);
}

logValue({ value: 'some value', name: 'some name' });


class DataHolder<T = string> {
  data: T;
  constructor(data: T) {
    this.data = data;
  };
  getDate(): T {
    return this.data;
  }
}

const strHolder = new DataHolder('data string');

console.log(strHolder.getDate());

const numHolder = new DataHolder(40);

console.log(numHolder.getDate());

// const defaultHolder = new DataHolder();
