//your JS code here. If required.
const userName = document.getElementById("id");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkbox");
const btn = document.getElementById("submit");
const myform = document.getElementById("myForm");
const existingbtn = document.getElementById("existing");
window.onload = function () {

if(localStorage.getItem("username") && 
	   localStorage.getItem("password")
	  ){
		existingbtn.style.display = "block";
	  }
}
myform.addEventListener("submit", function(e){
	e.preventDefault();

	

	alert(`Logged in as ${userName.value}`);
	
	if(checkBox.checked){
		localStorage.setItem("username",userName.value);
		localStorage.setItem("password",password.value);
	}else{
		localStorage.clear();
	}

	
})

existingbtn.addEventListener("click",function(){
	alert(`Logged in as ${localStorage.getItem("username")}`);
})