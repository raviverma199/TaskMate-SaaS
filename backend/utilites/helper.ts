import bcrypt from "bcrypt";

// function to create a tenant id
export function CreateTenantId() {
  let DefaultId = 4001;

  return function () {
    return DefaultId++;
  };
}

export const CreateTenant = CreateTenantId();

// function to encrpyt the password
export async function BcryptPassword(password: Buffer | string) {
  try {
    let SaltRound = 10;

    let HashedPassword = await bcrypt.hash(password, SaltRound);

    return HashedPassword;
  } catch (error) {
    console.log(error);
  }
}



// Function to bcrypt the password
