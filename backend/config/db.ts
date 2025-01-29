import { Pool } from "pg";
import PoolConfig from "./dbconfig";

const pool = new Pool(PoolConfig);

const ExceuteQuery = async (text: string, params?: any[]) => {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};

export default ExceuteQuery;
