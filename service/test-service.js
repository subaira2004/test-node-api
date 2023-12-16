import { db } from '../db/database.js'

export async function getAllTestData(skip, take) {

    const _db = await db();

    return await _db.collection('test').find({}).skip(skip).limit(take).toArray()
}