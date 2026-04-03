let users = [];

window.onload = function(){
  let savedUsers = localStorage.getItem("users");

  if (savedUsers){
    users = JSON.parse(savedUsers);
    displayUsers();
  }
};

function addUser(){
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;

  if(name === "" || age === "" || course === ""){
    alert("Please fill all spaces");
    return;
  }

  let user = {
    name: name,
    age: age,
    course: course
  };

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  displayUsers();

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
}

function displayUsers(){
  let list = document.getElementById("list");
  list.innerHTML = "";

  users.forEach(function(user){
    let li = document.createElement("li");
    li.innerText = `${user.name} - ${user.age} - ${user.course}`;
    list.appendChild(li);
  });
}