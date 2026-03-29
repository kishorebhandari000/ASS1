let user=[{name:"Ram",role:"admin"},
  {name:"Kishore",role:"editor"},
  {name:"Nabin",role:"admin"},
  {name:"Sirisha",role:"editor"}
];
console.log("Admins are: ",user
  .filter(i=>i.role==="admin")
  .map(i=>i.name)

);
console.log("Non-admins are: ",user
  .filter(i=>i.role!=="admin")
  .map(i=>i.name)

);