//判断用户名是否为空
function checkName(){
		var UserName = document.getElementById("UserName");
		if(UserName.value.length<=0){
			alert("请输入用户名！")
		}
		
}
//判断邮箱是否为空
function checkEmail(){
		var Email = document.getElementById("Email");
		if(Email.value.length<=0){
			alert("请输入正确的邮箱格式！")
		}
		
}
//判断密码是否为空
function checkPwd(){
		var Pwd = document.getElementById("Pwd");
		if(Pwd.value.length<=0){
			alert("请输入密码！")
		}
		
}
//判断是否又输入一次密码
//如果输入判断两次输入密码是否一致
function ValidatePwd(){
		var Pwd2 = document.getElementById("Pwd2");
		if(Pwd.value.length<=0){
			alert("请输入密码！");
		}else if(Pwd2.value!=Pwd.value){
			alert("两次输入密码不一致，请重新输入！");
		}
}

function skip(){
			alert("注册成功");
			document.getElementById("myform").action="Login.html";
}

