import { Router } from 'express';

import ExampleRepository from '../repositories/ExampleRepository';
import CreateExampleService from '../services/CreateExampleService';

const exampleRouter = Router();
const exampleRepository = new ExampleRepository();

exampleRouter.get('/', (request, response) => {
  const examples = exampleRepository.all();

  return response.json(examples);
});

exampleRouter.post('/', (request, response) => {
  try {
    const { name, city } = request.body;

    const createExample = new CreateExampleService(exampleRepository);

    const example = createExample.execute({ name, city });

    return response.json(example);
  } catch (err) {
    return response.status(400).json({ message: 'Error' });
  }
});

export default exampleRouter;
