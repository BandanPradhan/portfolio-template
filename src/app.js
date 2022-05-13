$(document).ready(function(){
    var entries=[
        {label:"HTML",url:"https://www.w3.org/standards/webdesign/htmlcss",target:'_top'},
        {label:"CSS",url:"https://www.w3.org/standards/webdesign/htmlcss",target:'_top'},
        {label:"Javascript",url:"https://www.javascript.com/",target:'_top'},
        {label:"SASS", url:"https://sass-lang.com/",target:'_top'},
        {label:"jQuery", url:"https://jquery.com/",target:'_top'},
        {label:"Angular", url:"https://angular.io/",target:'_top'},
        {label:"Node.js", url:"https://nodejs.org/en/",target:'_top'},
        {label:"Express.js",url:"https://expressjs.com/",target:'_top'},
        {label:"MongoDB", url:"https://www.mongodb.com/",target:'_top'},
        {label:"npm", url:"https://www.npmjs.com/",target:'_top'},
        {label:"git", url:"https://git-scm.com/",target:'_top'},
        {label:"Github",url:"https://github.com/",target:'_top'},
        {label:"Java", url:"https://www.w3schools.com/java/default.asp",target:'_top'},
        {label:"C++", url:"https://www.w3schools.com/CPP/default.asp",target:'_top'},
        {label:"Bootstrap5",url:"https://getbootstrap.com/",target:'_top'},
        {label:"ES5/ES6",url:"https://www.javascript.com/",target:'_top'}
        
    ];


    var settings={
        entries:entries,
        width:800,
        height:700,
        radius:'65%',
        bgColor:"rgba(0,0,0,0)",
        speed:0.9,
        fontFamily:" Open Sans, sans-serif",
        fontColor:"rgb(9, 132, 247)",
        fontSize:'35',
        fontWeight:'700',
        tooltipDiffX:0,
        tooltipDiffY:0,
       };

     $("#tag-cloud").svg3DTagCloud( settings );

     var content = 'About me..';

     var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
     
     
     $(ele).hide().appendTo('#About').each(function (i) {
         $(this).delay(500 * i).css({
             display: 'inline',
             opacity: 0
         }).animate({
             opacity: 1
         }, 500);
     });
     var content1 = 'My Skills..';

     var ele1= '<span>' + content1.split('').join('</span><span>') + '</span>';
     
     
     $(ele1).hide().appendTo('#Skill').each(function (i) {
         $(this).delay(500 * i).css({
             display: 'inline',
             opacity: 0
         }).animate({
             opacity: 1
         }, 500);
     });


    

const losBoxes = document.querySelectorAll(".gallery-image");
const elGallery = document.querySelector(".gallery");

let options = {
  threshold: 0.25
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach(({ target, intersectionRatio, boundingClientRect }) => {
    target.dataset.visible = intersectionRatio > 0.25;

    let viewportPosition = 1;
    if (intersectionRatio > 0.24) {
      viewportPosition = 0;
    } else if (boundingClientRect.y < 0) {
      viewportPosition = -1;
    }

    target.dataset.viewportPosition = viewportPosition;
    target.style.setProperty("--ix-ratio", intersectionRatio);
  });
}, options);

losBoxes.forEach((elBox) => {
  observer.observe(elBox);
});










       

});
(function($) { "use strict";
		


	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});
	
})(jQuery); 
