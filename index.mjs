// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";
  
async function getUserData(id) {
  
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  try {

    const dbName = await central(id);
    console.log(dbName);

    const dbInfo = await dbs[dbName](id);
    console.log(dbInfo);

    const returnedValue = await vault(id);
    console.log(returnedValue);
    
  } catch (error) {
      console.error(error);
  }
}

getUserData(1);