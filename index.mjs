// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserInfo(id) {
  const userInformation = await central(id);

  const basicInformation1 = await db1(Id);
  const basicInformation2 = await db2(Id);
  const basicInformation3 = await db3(Id);

  const personalData = await vault(id);
}

const dbs = {
  db1: db1,
  db2: db2,
  db3: db3
};
