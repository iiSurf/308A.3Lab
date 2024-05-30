// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserInfo(id) {
  try {

    const dbName = await central(id);

    const userData1 = await db1(id);
    const userData2 = await db2(id);
    const userData3 = await db3(id);

    const personalData = await vault(id);

    const userObject = {
      id, // or is it id: id?
      name: personalData.name,
      username: userData.username,
      email: personalData.email,
      address: {
        street: personalData.address.street,
        suite: personalData.address.suite,
        city: personalData.address.city,
        zipcode: personalData.address.zipcode,
        geo: {
          lat: personalData.address.geo.lat,
          lng: personalData.address.geo.lng,
        },
      },
      phone: personalData.phone,
      website: userData.website,
      company: {
        name: userData.company.name,
        catchPhrase: userData.company.catchPhrase,
        bs: userData.company.bs,
      },
    };

    return userObject;
  } catch (error) {

    throw new Error(`Can not get information: ${error.message}`);
  }
}