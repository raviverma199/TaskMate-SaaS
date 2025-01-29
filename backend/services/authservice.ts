import ExceuteQuery from "../config/db";
import { CreateTenant, BcryptPassword } from "../utilites/helper";

interface SuccessReponse {
  status: boolean;
  data: object;
}

interface ErrorResponse {
  status: boolean; // Corrected spelling to match usage.
  Errormsg: string;
}

export const signupuser = async (
  user_name: string,
  email: string,
  password: string | Buffer
): Promise<SuccessReponse | ErrorResponse> => {
  try {
    let query1 = `select email from user_credentials where email = $1`;
    let isUserExist = await ExceuteQuery(query1, [email]);

    if (isUserExist.rows.length > 0) {
      return { status: false, Errormsg: "User Already Exist" };
    }

    const hashedPassword = await BcryptPassword(password);

    let query = `insert into user_credentials
     (tenant_id,username,email,password)
      values ($1,$2,$3,$4) returning *`;

    let result = await ExceuteQuery(query, [
      CreateTenant(),
      user_name,
      email,
      hashedPassword,
    ]);

    return { status: true, data: result.rows[0] };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      Errormsg: "An error occurred during user creation",
    };
  }
};

export const LoginUser = async (
  username: string,
  password: string | Buffer
) => {
  try {
    let query = `select * from user_credentials where username = $1`;
    let GetData = await ExceuteQuery(query, [username]);
  } catch (error) {
    console.error(error);
  }
};
