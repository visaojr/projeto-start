import { Router } from 'express';
import TesteRoutes from './example.routes';

const routes = Router();

routes.use('/teste', TesteRoutes);

export default routes;
