//定义全局变量
var code;
//创建   产生验证码的  函数
function createCode(){
		code = "";
		var codeLength = 6;//设置验证码的长度
		var checkcode = document.getElementById("checkCode");
		var charscode = new Array(
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
		);
		for(var i=0;i<codeLength;i++){
			var charsNum = Math.floor(Math.random()*62);//找到随机数的索引
			code += charscode[charsNum];
		}
		checkcode.innerHTML = code;
		
}

//创建检验验证码的函数
function validateCode(){
		var inputCode = document.getElementById("inputCode").value;
		if(inputCode.length<=0){
			alert("请输入验证码！");
			return false;
		}else if(inputCode.toUpperCase()!=code.toUpperCase()){
			alert("验证码错误，请重新输入！");
			createCode();//刷新验证码
			document.getElementById("inputCode").value="";
			return false;
		}else{
			alert("输入正确！");
			alert("欢迎登陆！");
			document.getElementById("myform").action="index.html";
		}
}
