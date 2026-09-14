function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet('dima'));

function logMessage(message: string): void {
  console.log(message);
}

logMessage('some msg');

function calculateSum(a: number, b: number): number {
  return a + b;
}

console.log(calculateSum(1, 23));

function createGreeting(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}`;
}

console.log(createGreeting('Denis', 'Hi'));

function sumAll(...args: number[]): number {
  return args.reduce((acc, item) => acc + item, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));

function multiply(...nums: number[]): number {
  return nums.reduce((acc, item) => acc * item, 1);
}

console.log(multiply(2, 3, 5));

const f = (a: number, b: number): number => {
  return a * b;
};

console.log(f(2, 4));

type SomeFn = (n: number, v: number) => number;

const g: SomeFn = (a, b) => {
  return a * b;
};

console.log(g(4, 5));
