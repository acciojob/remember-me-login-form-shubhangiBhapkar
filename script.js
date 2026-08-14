//your JS code here. If required.
const userName = document.getElementById("id");
const password = document.getElementById("password");
const checkBox = document.getElementById("checkbox");
const btn = document.getElementById("submit");
const myform = document.getElementById("myForm");
const existingbtn = document.getElementById("existing");
onLoad(){

if(localStorage.userObj.userName == userName.value && 
	   localStorage.userObj.password == password.value
	  ){
		existingbtn.style.display = block;
	  }
}
myForm.addEventListener("submit", function(e){
	e.preventDefault();

	

	alert(`Logged in as ${userName.value}`);
	
	if(checkBox.checked){
		localStorage.setItem(username:userName);
		localStorage.setItem(password:password);
	}else{
		localStorage.clear();
	}

	
})

existingbtn.addEventListener("click",function(){
	alert(`Logged in as ${userName}`);
})