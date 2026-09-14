let result: number | string;

result = 10;
result = 'some str';


function printResult(value: number | string): void {
  console.log(`Result: ${value}`);
}

printResult(15);
printResult('some string');
// printResult(true);