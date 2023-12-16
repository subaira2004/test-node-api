import express from 'express'
import testRoutes from '../api/test/index.js';
const routes = express.Router();

routes.use('/test',testRoutes);

export default routes;  