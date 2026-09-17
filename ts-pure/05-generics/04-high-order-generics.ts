type Mapper<T, U> = (value: T) => U;
/**
 * High Order Generic 
 * @param arr 
 * @param mapper 
 * @returns 
 */
function transformArray<T, U>(arr: T[], mapper: Mapper<T, U>): U[] {
  return arr.map(mapper);
}

const numbers = [1, 3, 4, 5];
const numberToString: Mapper<number, string> = (num: number) => num.toString();

console.log(transformArray(numbers, numberToString));

interface IProduct {
  id: number;
  name: string;
  price: number;
}

const product1: IProduct[] = [
  { id: 1, name: 'laptop', price: 1000 },
  { id: 2, name: 'mouse', price: 10 },
  { id: 3, name: 'desktop', price: 2000 }
]

const extractProductName: Mapper<IProduct, string> = (product) => product.name;

const productsName = product1.map(extractProductName);
console.log(productsName);

const productsNames = transformArray(product1, extractProductName);
console.log(productsNames);

const extractId: Mapper<IProduct, number> = (product) => product.id;

const productsIds = transformArray(product1, extractId);
console.log(productsIds);