import { client } from "./Sanity.client";

export const createUser = async (user: any) => {
  const { name, email } = user;
  const userId = email.split("@")[0];
  console.log("userId", userId);
  const new_doc: any = {
    _type: "user",
    _id: userId,
    name,
    email,
  };
  const result = await client.createIfNotExists(new_doc).then((result: any) => {
    console.log("result", result);
    return result;
  });

  // const hashedPassword = await bcrypt.hash(password, 12);

  // return newUser;
};
