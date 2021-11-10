import { database } from "../firebase";

export const getContactObjects = async () => {
  const snapshot = await database.ref("/Employee").once("value");
  const data = snapshot.val() || {};
  //for id of each employee
  for (const key of Object.keys(data)) {
    //get current employee
    const item = data[key];
    //get who he reports to
    const person = data[item.reportsTo];
    //set who he reports to on current employee
    if (person) data[key].reportsToName = person.name;
  }
  return data;
};
