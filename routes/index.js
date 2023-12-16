import express from 'express'
import testRoutes from '../api/test/index.js';
const routes = express.Router();

routes.get('/', async (req, res) => {
   
    res.send('Welcome to test api....');

});

routes.get('/echo', async (req, res) => {
   const echoWord = req.query.q??"";

    res.send(echoWord? `Echoing your input : ${echoWord}`:'your input is missing :(');

});

routes.use('/test', testRoutes);

export default routes;  