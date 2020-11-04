import Example from '../models/Example';

interface CreateAppointmentDTO {
  name: string;
  city: string;
}

class ExampleRepository {
  private examples: Example[];

  constructor() {
    this.examples = [];
  }

  public all(): Example[] {
    return this.examples;
  }

  public create({ name, city }: CreateAppointmentDTO): Example {
    const example = new Example({ name, city });

    this.examples.push(example);

    return example;
  }
}

export default ExampleRepository;
