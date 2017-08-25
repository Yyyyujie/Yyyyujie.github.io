/*
* @Author: ASUS
* @Date:   2017-03-16 10:30:31
* @Last Modified by:   ASUS
* @Last Modified time: 2017-03-16 10:57:29
*/

// 'use strict';
window.onload=function (){
	const designWidh=750;
	const fontSize=100;
	function resizeFont(){
		// 变量var
		var CW = document.documentElement.clientWidth;
		// 分辨比例
		var radio = CW/designWidh;
		
		var newFontSize = fontSize*radio;
		document.querySelector("html").style.fontSize=
		newFontSize+"px";

	}
	// 执行resizeFont
	resizeFont（）；
	// 窗口大小改变时执行
	window.onresize=resizeFont;
}