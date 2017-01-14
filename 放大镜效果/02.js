window.onload = function(){
	var div = document.getElementById('div')
	var bigBox = document.getElementById('bigBox')
	var smallBox = document.getElementById('smallBox')
	var floatBox = document.getElementById('floatBox')
	var bigImg = document.getElementById('bigImg')

	smallBox.onmouseover = function(){
		floatBox.style.display ='block';
		bigBox.style.display ='block';

	}
	smallBox.onmouseout = function(){
		floatBox.style.display ='none';
		bigBox.style.display ='none';

	}
	smallBox.onmousemove = function(event){
		var e = event||window.event;

		var x = e.clientX-100 - floatBox.offsetWidth / 2;
		var y = e.clientY-100 - floatBox.offsetHeight / 2;

		floatBox.style.left = x + 'px';
		floatBox.style.top = y + 'px';

		//大图位置y = x*b/a
		var left = x * bigImg.offsetWidth / smallBox.offsetWidth;
		var top = y * bigImg.offsetHeight / smallBox.offsetHeight; 

		bigImg.style.left = - left + 'px';
		bigImg.style.top = - top + 'px';
 
	}

}