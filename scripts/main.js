"use strict";function doNavigation(a,b,c){a.on("webkitAnimationEnd animationend",function(){a.off("webkitAnimationEnd animationend"),a.removeClass("current "+c+" out"),b.removeClass(c+" in")}),b.addClass(c+" in current"),a.addClass(c+" out")}$(function(){FastClick.attach(document.body)});var animationPageOne=$("#page1"),animationPageTwo=$("#page2"),animationPageOneButton=$("#page1-button"),animationPageTwoButton=$("#page2-button"),animationPageOneSelect=$("#page1-select"),animationPageTwoSelect=$("#page2-select");animationPageOneButton.on("click",function(){doNavigation(animationPageOne,animationPageTwo,animationPageOneSelect.prop("value"))}),animationPageTwoButton.on("click",function(){doNavigation(animationPageTwo,animationPageOne,animationPageTwoSelect.prop("value"))});var splitLayout=$("#layout-split"),splitButton=$("#split-button");splitButton.on("click",function(){splitLayout.toggleClass("open")});var toggleButton=$(".toggle-button");toggleButton.on("click",function(){$("#"+$(this).data("toggle")).toggleClass("open")});