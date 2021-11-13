import { DB_INFO } from '../components/constants/constants';
import { createPool, Pool, RowDataPacket } from 'mysql2/promise';

let pool: Pool | null = null;

export const getPool = (): Pool => {
    if (pool !== null) { return pool; }
    pool = createPool({
        host: DB_INFO.host,
        user: DB_INFO.user,
        // password: 'root',
        database: DB_INFO.database,
        // waitForConnections: true,
        // connectionLimit: 10,
        // queueLimit: 0,
    });
    return pool;
};

export const select = async (query: string): Promise<RowDataPacket[]> => {
    const res = await getPool().execute(query);
    return res[0] as RowDataPacket[];
};