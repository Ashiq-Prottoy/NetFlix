var spanCross=document.querySelectorAll(".qs span");
var answer=document.querySelectorAll(".ans");


var expand = document.querySelectorAll(".qs")[0];
expand.addEventListener("click",()=>{
		spanCross[0].classList.toggle("rotate");
		answer[0].classList.toggle("ansTog");
})

var expand = document.querySelectorAll(".qs")[1];
expand.addEventListener("click",()=>{
		spanCross[1].classList.toggle("rotate");
		answer[1].classList.toggle("ansTog");
})

var expand = document.querySelectorAll(".qs")[2];
expand.addEventListener("click",()=>{
		spanCross[2].classList.toggle("rotate");
		answer[2].classList.toggle("ansTog");
})

var expand = document.querySelectorAll(".qs")[3];
expand.addEventListener("click",()=>{
		spanCross[3].classList.toggle("rotate");
		answer[3].classList.toggle("ansTog");
})

var expand = document.querySelectorAll(".qs")[4];
expand.addEventListener("click",()=>{
		spanCross[4].classList.toggle("rotate");
		answer[4].classList.toggle("ansTog");
})

for(var j=0;j<20;j++){
	var alerting=document.querySelectorAll(".ft-1 ul li")[j];
alerting.addEventListener("click",()=>{
	alert("This is a Clone website made by Md Ashiqur rahim Prottoy just for Showing design skill.This website is not for real purpose. Thank you");
});
}


document.addEventListener("contextmenu",function(proWeb){
proWeb.preventDefault();
});



function enter(){
	var reqTxt=document.querySelector("#req");
	var emailVl=document.querySelector(".email1").value;

	if(emailVl=='')
	{
		reqTxt.innerHTML="Email address is requiered";
		return false;
	}
	else
	{
		alert("This is a Clone website made by Md Ashiqur rahim Prottoy just for Showing design skill.This website is not for real purpose. Thank you");
	}
};