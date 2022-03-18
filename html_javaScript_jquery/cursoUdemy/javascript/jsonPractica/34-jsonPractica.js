var data = {
  username: "miguelito",
  _id: "5fb5853f734231456ccb3b05",
  count: 0,
  Logs: "",
};

var loging = {};

var newData = {
  description: "una",
  duration: 30,
};
var newData1 = {
  description: "una",
  duration: 30,
};
var newData2 = {
  description: "una",
  duration: 30,
};
var newData3 = {
  description: "una",
  duration: 30,
};

loging[0] = newData;
loging[1] = newData1;
loging[2] = newData2;
loging[3] = newData3;
data.count = 4;
data.Logs = loging;
console.log(loging);
console.log(data);

var prueba = [{ algo: "", otro: "" }, { algo: "" }];
console.log(prueba);
