import {createPool, Pool, PoolConnection} from 'mysql2/promise';
require('dotenv').config();

// Database connection. Can use config from .env file (based on example.env) or the defaults
let globalPool: Pool | undefined = undefined
export const connect = async () => {
    if (globalPool){
        return globalPool
    }
    globalPool = await createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        connectionLimit: 10,
        namedPlaceholders: true
    });
    return globalPool


};
