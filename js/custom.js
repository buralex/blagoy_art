/*---------------------------------------------------------------

						CUSTOM
						
----------------------------------------------------------------*/


$(window).on("load", function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});



$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

});

/*------------------------------------------------------------------------------

						DEBOUNCE
						
------------------------------------------------------------------------------*/
Function.prototype.debounce = function (milliseconds) {
    var baseFunction = this,
        timer = null,
        wait = milliseconds;

    return function () {
        var self = this,
            args = arguments;

        function complete() {
            baseFunction.apply(self, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(complete, wait);
    };
};
/* -----------------------------------------------------------------------------

                      STICKY FOOTER     with responsive height 
  
----------------------------------------------------------------------------- */

function stickyFooter(footerContainer, wrapCont) {
    
    function stick() {
        var footerHeight = document.querySelector(footerContainer).offsetHeight;
        document.querySelector(footerContainer).style.cssText = "margin-top: -" + footerHeight + "px;";
        document.querySelector(wrapCont).style.cssText = "padding-bottom: " + footerHeight + "px;";
        
    }
	
   window.addEventListener("load", function(event) { stick() }.debounce(10));
   window.addEventListener("resize", function(event) { stick() }.debounce(10));
   
}

/* -----------------------------------------------------------------------------

                         NAVBAR 
  
----------------------------------------------------------------------------- */

function navbar(collapse, toggle) {
	var navbar = document.querySelector(collapse);
	var toggle = document.querySelector(toggle);
	
	var mobCart = document.querySelector('.cart');
	var mobSearch = document.querySelector('.main-header__search');
	var mobReg = document.querySelector('.register');
	var mobInfo = document.querySelector('.main-header__work-info');
	var mobLogo = document.querySelector('.logo');
	var dropdown = document.querySelector('.dropdown');
	var dropdownFirst = document.querySelector('.dropdown--first');
	
	toggle.addEventListener("click", function(event) {
		this.classList.toggle('active');
		$(collapse).slideToggle(200);
		
	});
	
	function handler() {
		if (window.innerWidth < 769) {
			
			mobCart.style.cssText = "display: none;";
			mobSearch.style.cssText = "display: none;";
			mobReg.style.cssText = "display: none;";
			mobInfo.style.cssText = "display: none;";

		} else {
			toggle.classList.remove('active');

			mobCart.style.cssText = "display: inline-block;";
			mobSearch.style.cssText = "display: block;";
			mobReg.style.cssText = "display: inline-block;";
			mobInfo.style.cssText = "display: block;";
			mobLogo.style.cssText = "display: block;";
		}
	}
	
	window.addEventListener("load", function(event) { handler() }.debounce(10));
	window.addEventListener("resize", function(event) { handler() }.debounce(10));
	
	$('.dropdown').on('click', function(event) {
		 event.preventDefault(); 
		 event.stopPropagation(); 
		 $(this).children('.sub-menu').slideToggle(200);
		 $(this).siblings().children('.sub-menu').hide();
	});
	
	dropdownFirst.addEventListener("click", function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		document.querySelector('.dropdown__chevron-down').classList.toggle('dropdown__chevron-down--opened');
	});

	window.onclick = function(event) {
		if (!event.target.matches('.dropdown, .sub-menu')) {
			document.querySelector('.dropdown__chevron-down').classList.remove('dropdown__chevron-down--opened');
			$('.sub-menu').each(function(){
				$(this).slideUp(200);
			});
		}
	}
	
	
	
		/*menu mobile */
	var li = document.querySelectorAll('.navbar__i > li');
	var toggleSearch = document.querySelector('.navbar__i-search');
	var toggleCart = document.querySelector('.navbar__i-cart');
	var toggleRegister = document.querySelector('.navbar__i-register');
	var toggleContact = document.querySelector('.navbar__i-contact');
	var toggleHome = document.querySelector('.navbar__i-home');
	var prev ='.logo';
		
		toggleHome.addEventListener("click", function(event) {
			$('.logo').slideUp(200);
			$(prev).slideUp(200);
			$('.logo').slideToggle(200);
			prev = '.logo';
		});
		toggleSearch.addEventListener("click", function(event) {
			$('.logo').slideUp(200);
			$(prev).slideUp(200);
			$('.main-header__search').slideToggle(200);
			prev = '.main-header__search';
		});
		toggleCart.addEventListener("click", function(event) {
			$('.logo').slideUp(200);
			$(prev).slideUp(200);
			$('.cart').slideToggle(200);
			prev ='.cart';
		});
		toggleRegister.addEventListener("click", function(event) {
			$('.logo').slideUp(200);
			$(prev).slideUp(200);
			$('.register').slideToggle(200);
			prev ='.register';
		});
		toggleContact.addEventListener("click", function(event) {
			$('.logo').slideUp(200);
			$(prev).slideUp(200);
			$('.main-header__work-info').slideToggle(200);
			prev ='.main-header__work-info';
		});
		
	/*menu mobile */

/* -----------------------------------------------------------------------------*/

}





