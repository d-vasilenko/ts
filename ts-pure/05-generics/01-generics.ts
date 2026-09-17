interface Box<T> {
  value: T;
}

const numerBox: Box<number> = {
  value: 49,
}

const stringBox: Box<string> = {
  value: 'some str',
}

type Pair<T, U> =  {
  first: T,
  second: U,
}

const pair: Pair<string, number> = {
  first: 'first',
  second: 2,
}

