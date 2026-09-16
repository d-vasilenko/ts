abstract class Shape {
  abstract calulateArea(): number;
  displayShapeType(shapeType: string): void {
    console.log(`This is ${shapeType}`)
  }
}

interface ICircleProperties {
  radius: number;
}

interface IRectangleProperties {
  width: number;
  height: number;
}

class Circle extends Shape implements ICircleProperties {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  };
  calulateArea(): number {
    return Math.PI * this.radius ** 2;
  }
} 

class Rectangle extends Shape implements IRectangleProperties {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height; 
  }
  calulateArea(): number {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(30, 40);

console.log(circle.calulateArea());
console.log(rectangle.calulateArea());