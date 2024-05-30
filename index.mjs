// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  try {
    const returnedValue = await central(id);

    let userData;
    switch (returnedValue) {
      case "db1":
        userData = await db1(id);
        break;
      case "db2":
        userData = await db2(id);
        break;
      case "db3":
        userData = await db3(id);
        break;
      case "vault":
        userData = await vault(id);
        break;
      default:
        throw new Error(`try again`);
    }
  }
}
const dbs = {
  db1: db1,
  db2: db2,
  db3: db3
};
  } catch (error) {

}

