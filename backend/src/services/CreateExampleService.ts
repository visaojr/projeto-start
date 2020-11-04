import Example from '../models/Example';
import ExampleRepository from '../repositories/ExampleRepository';

interface Request {
  name: string;
  city: string;
}

class CreateExampleService {
  private exampleRepository: ExampleRepository;

  constructor(exampleRepository: ExampleRepository) {
    this.exampleRepository = exampleRepository;
  }

  public execute({ name, city }: Request): Example {
    const example = this.exampleRepository.create({
      name,
      city,
    });

    return example;
  }
}

export default CreateExampleService;
