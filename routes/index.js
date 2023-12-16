import express from 'express'
import testRoutes from '../api/test/index.js';
const routes = express.Router();

routes.get('/', async (req, res) => {
   
    res.send('Welcome to test api....');

});

routes.use('/test', testRoutes);

export default routes;  