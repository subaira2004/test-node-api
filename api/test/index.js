
import express from 'express';
import { getAllTestData } from '../../service/test-service.js'

const testRoutes = express.Router();

testRoutes.get('/get-test-data', async (req, res) => {
    const skip = parseInt(req.query.skip ?? 0);
    const take = parseInt(req.query.take ?? 10);

    const result = await getAllTestData(skip, take);

    res.json(result);

});


export default testRoutes;