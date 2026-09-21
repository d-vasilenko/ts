interface IUser {
  id: number;
  name: string;
  age: number;
}

const partiaUser: Partial<IUser> = {
  age: 49,
};

const prtialUser2: Partial<IUser> = {
  name: 'some name',
};

const user1: Readonly<IUser> = {
  name: 'den',
  id: 4,
  age: 4,
};

// user1.name = 'anoter';

type UserPreview = Pick<IUser, "id" | "name">;
interface IUserPreview extends Pick<IUser, "id" | "age"> {}


const user2: UserPreview = {
  id: 4,
  name: 'some',
};

const user3: IUserPreview = {
  id: 4,
  age: 49,
};

type Role = "admin" | "user" | "guest";

const rolePremisions: Record<Role, string[]> = {
  admin: ['wrid'],
  user: ['read'],
  guest: ['dkdjf'],
};

type UserOmit = Omit<IUser, "id">;
interface IUserOmit extends Omit<IUser, "name">{};

const user4: UserOmit = {
  name: 'some',
  age: 49,
};

const user5: IUserOmit = {
  id: 4,
  age: 49,
};
