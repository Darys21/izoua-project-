import Database from 'better-sqlite3';
import { join } from 'path';
import fs from 'fs';

const dbPath = join(process.cwd(), 'izoua.db');
const schemaPath = join(process.cwd(), 'src/db/schema.sql');

const db = new Database(dbPath);
db.pragma('foreign_keys = ON');

// Initialize database if it doesn't exist
if (!fs.existsSync(dbPath)) {
  const schema = fs.readFileSync(schemaPath, 'utf8');
  db.exec(schema);
}

export const createUser = db.prepare(`
  INSERT INTO users (name, email, password_hash)
  VALUES (@name, @email, @passwordHash)
`);

export const createQRCode = db.prepare(`
  INSERT INTO qr_codes (user_id, code)
  VALUES (@userId, @code)
`);

export const getUserByEmail = db.prepare(`
  SELECT * FROM users WHERE email = ?
`);

export const getUserPoints = db.prepare(`
  SELECT SUM(amount) as total FROM points WHERE user_id = ?
`);

export default db;