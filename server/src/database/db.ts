import { Pool } from 'pg';
import { db } from '../config';

export default new Pool({
  connectionString: db,
});
