type ANY_TODO = any;

const anyValue: any = 'some srting';

const strLength: number = anyValue.length;

console.log(strLength);

// const _strLength: number = anyValue.map(((item: any) => item.length));
// console.log(_strLength);

let value: unknown;
value = 10;
value = 'hello';
value = true;
value = 'some srting';

if (typeof value === 'string') {
  console.log(value.toUpperCase());
}