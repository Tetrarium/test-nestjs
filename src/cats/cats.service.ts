import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

const cats: Cat[] = [
  {
    id: 1,
    name: 'Barsik',
    age: 2,
    breed: 'Coon',
  },
  {
    id: 2,
    name: 'Murzik',
    age: 3,
    breed: 'undefined',
  }
];

let nextId = 3;

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = cats;

  create(cat: Omit<Cat, "id">) {
    this.cats.push({ ...cat, id: nextId});
    nextId += 1;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat | {} {
    return this.cats.find(cat => cat.id === id) || {};
  }
}