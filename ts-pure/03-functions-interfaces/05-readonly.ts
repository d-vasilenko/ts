interface IUserReadonly {
  readonly id: number;
  name: string;
  readonly birthday: Date;
}

const user: IUserReadonly = {
  id: 333,
  name: 'Some Name',
  birthday: new Date('1990-01-01'),
};

// user.id = 49;

console.log(user);

const numbers: readonly number[] = [1, 2];

// numbers.push(40);
// numbers[2] = 59;

const point: readonly [number, number] = [1, 3];

// point[0] = 30;

class Article {
  readonly id: number;
  title: string;
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  };
  changeId(newId: number): void {
    this.id = newId;
  } 
}

const article: Article = new Article(94, 'some title');

console.log(article);