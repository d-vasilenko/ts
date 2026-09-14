const someValue: any = 'some string';
const stringLength: number = (<string>someValue).length;

console.log(stringLength);

const someValue1: any = 'this is a string';
const stringLength1: number = (someValue1 as string).length;

console.log(stringLength1);

const myElement: HTMLElement | null = document.getElementById('myElement');
myElement!.style.color = 'blue';
myElement && (myElement.style.color = 'red');