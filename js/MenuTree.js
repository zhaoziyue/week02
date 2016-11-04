//$(function(){
//	$('.One').click(function(e){
//		var ul = $(this).next('.Two');
//		if(ul.css("display")=="block"){
//			ul.addClass('hide');
//		}else{
//			ul.removeClass('hide');
//		}
//	})
//})
//
//$(function(){
//	$('.Three').click(function(f){
//		var li = $(this).children('.Four');
//		if(li.css("display")=="none"){
//			li.addClass('show');
//		}else{
//			li.removeClass('show');
//		}
//	})
//})

onload = function (){
		var showOne = document.getElementsByClassName("One");		
		for (var j = 0 ;j < showOne.length ; j++) {
			showOne[j].onclick = function(){
				var list_0 = this.nextSibling.nextSibling;
				if(list_0.className == "Two"){
					list_0.className ="hide";
				}else{
					list_0.className = "Two";
				}
			}
		}
		
		//先找到点击的元素
		var showTwo = document.getElementsByClassName("Three");
		//遍历这些元素
		for (var i = 0;i < showTwo.length ; i++){
			//给每一个showTwo添加点击事件
			showTwo[i].onclick = function(){
			//找到点击的第二个子节点，也就是第二个ul
			var list_1 = this.children[1];
			//找出现在开着的元素，命名为showNow
			var showNow =  document.getElementsByClassName("show");
			//如果现在开着的元素是你点击的元素
			if(showNow[0] == list_1){
				//将它关闭
				list_1.className = "Four";
			}
			//否则(现在开着的不是你点击的)
			else{
				//将所有开着的关闭，使用for循环将开着的遍历出来，然后全部关闭
				for(var g = 0 ; g < showNow.length ; g++ ){
					showNow[g].className = "Four";
				}
				//将你点击的打开，类名设为显示
				list_1.className = "show";
			}
		}
		}

}
