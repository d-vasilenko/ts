enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const move: Direction = Direction.Up;
console.log(move);

enum Color {
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green',
}

const color: Color = Color.Red;
console.log(color);

enum ResponseCode {
  Ok = 200,
  NotFound = 404,
  ServerError = 500,
}

const responceCode: ResponseCode = ResponseCode.Ok;
console.log(responceCode);

enum MixedEnum {
  No = 0,
  Yes = 'Yes',
}

console.log(Direction[0]);
console.log(Direction[Direction.Down]);