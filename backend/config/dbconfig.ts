import { PoolConfig } from "pg";

const dbconfig: PoolConfig = {
  user: "postgres",
  host: "localhost",
  database: "task_management_db",
  password: "root",
  port: 2000
};

export default dbconfig;
