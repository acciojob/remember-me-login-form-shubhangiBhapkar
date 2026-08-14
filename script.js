//your JS code here. If required.
const  username = document.getElementById("usrname");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkbox");
const btn = document.getElementById("submit");
const myform = document.getElementById("myForm");
const existingbtn = document.getElementById("existing");

window.onload = function () {
	const savedUserName = localStorage.getItem("username");
	const savedPassword = localStorage.getItem("password");
if(savedUserName !== null && savedPassword !==null){
		existingbtn.style.display = "block";
	  }
}
myform.addEventListener("submit", function(e){
	e.preventDefault();

	

	alert(`Logged in as ${ username.value}`);
	
	if(checkBox.checked){
		localStorage.setItem("username",username.value);
		localStorage.setItem("password",password.value);
	}else{
		localStorage.clear();
	}

	
})

existingbtn.addEventListener("click",function(){
	alert(`Logged in as ${localStorage.getItem("username")}`);
})