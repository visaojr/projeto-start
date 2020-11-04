import { uuid } from 'uuidv4';

class Example {
  id: string;

  name: string;

  city: string;

  constructor({ name, city }: Omit<Example, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.city = city;
  }
}

export default Example;
