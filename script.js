//your JS code here. If required.
const userName = document.getElementById("id");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkbox");
const btn = document.getElementById("submit");
const myform = document.getElementById("myForm");
const existingbtn = document.getElementById("existing");

myForm.addEventListener("submit", function(e){
	e.preventDefault();

	if(localStorage.userObj.userName == userName.value && 
	   localStorage.userObj.password == password.value
	  ){
		existingbtn.style.display = block;
	  }

	alert(`Logged in as ${userName.value}`);
	let userObj = {username:userName, password:password}
	if(checkBox.value == checked){
		localStorage.setItem(JSON.stringify(userObj));
	}else{
		localStorage.clear();
	}

	
})

existingbtn.addEventListener("click",function(){
	alert("Logged in as <saved username>")
})