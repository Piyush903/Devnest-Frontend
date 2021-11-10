import { database } from "../firebase";

export const getAttendanceObjects = async () => {
  const snapshot = await database.ref("/Attendance").once("value");
  const data = snapshot.val() || {};
  return data;
};
