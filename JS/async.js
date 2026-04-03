// // function getData(){
// //   return new Promise((resolve)=>{
// //     setTimeout(()=>{
// //       resolve("Data loaded");
// //     },4000);
// //   });
// // }
// // async function showData(){
// //   let result = await getData();
// //   console.log(result);
// // };
// // showData();

// // async function fetchData(){
// //   let x=await fetch("https://jsonplaceholder.typicode.com/users");
// //   let y= await x.json();
// // }
// // fetchData();

// // let user={name:"kishore", age:20};
// // localStorage.setItem("user", JSON.stringify(user));


// let users = [
//   { name: "Kishore", age: 24, course: "Bachelor of IT" },
//   { name: "Pranish", age: 25, course: "Cyber Security" },
//   { name: "Sirisha", age: 24, course: "Data Science" }
// ];
// let list=document.getElementById("list");
// users.forEach(user=>{
//   let li=document.createElement("li");
//   li.innerText=`${user.name}-${user.age}-${user.course}`;
//   list.appendChild(li);
// });

// localStorage.setItem("users",JSON.stringify(users));
// let x=JSON.parse(localStorage.getItem("users"));
// console.log(x);