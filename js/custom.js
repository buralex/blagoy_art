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
	
   window.addEventListener("load", function(e) { stick() }.debounce(10));
   window.addEventListener("resize", function(e) { stick() }.debounce(10));
   
}

/* -----------------------------------------------------------------------------

                         NAVBAR 
  
----------------------------------------------------------------------------- */

function navbar(collapse, toggle) {
	var navbar = document.querySelector(collapse);
	var toggle = document.querySelector(toggle);
	
	/*menu mobile */
	var toggleSearch = document.querySelector('.navbar__i-search');
	var toggleCart = document.querySelector('.navbar__i-cart');
	var toggleRegister = document.querySelector('.navbar__i-register');
	var toggleContact = document.querySelector('.navbar__i-contact');
	var logo = document.querySelector('.logo--mob');
	
	
	var li = document.querySelectorAll('.navbar__i > li');  // array of li elements
	
	for (var i = 0; i < li.length; i++) {
	    var link = li[i];
	    handleClick(link, i);
	}  
      
      function handleClick(link, index) {
      link.addEventListener('click', function(e) {
        
        $(link).slideToggle(200);
        //document.querySelector(nav).classList.remove(removeClass);
        //document.querySelector(navbar).classList.add(navbarHide);
        
        //var anchor = link.children[0].getAttribute("href");
        
        /*--------------- add animations for sections (self-exec) -----------------*/
   
         /*--------------- end add animations -----------------*/
        
      });
    };
	
	
	
	
		// function clen(argument) {
		// 	// body...
		// }
	
		// toggleSearch.addEventListener("click", function(e) {
		// 	$('.main-header__search').slideToggle(200);
		// 	logo.classList.toggle('hidden');
		// });
		// toggleCart.addEventListener("click", function(e) {
		// 	$('.cart').slideToggle(200);
		// 	logo.classList.toggle('hidden');
		// });
		// toggleRegister.addEventListener("click", function(e) {
		// 	$('.register').slideToggle(200);
		// 	logo.classList.toggle('hidden');
		// });
		// toggleContact.addEventListener("click", function(e) {
		// 	$('.main-header__work-info').slideToggle(200);
		// 	logo.classList.toggle('hidden');
		// });
		
	/*menu mobile */
	
	toggle.addEventListener("click", function(e) {
		this.classList.toggle('active');
		$(collapse).slideToggle(200);
		
	});
	
	function handler() {
		if (window.innerWidth < 769) {
			navbar.style.cssText ="display: none;";
		} else {
			toggle.classList.remove('active');
			navbar.style.cssText ="display: block;";
		}
	}
	
	window.addEventListener("load", function(e) { handler() }.debounce(10));
	window.addEventListener("resize", function(e) { handler() }.debounce(10));
}

	$('.dropdown').on('click', function(event) {
		 event.preventDefault(); 
		 event.stopPropagation(); 
		 $(this).children('.sub-menu').slideToggle(200);
		 $(this).siblings().children('.sub-menu').hide();
	});
	
	$('.dropdown--first').on('click', function(event) {
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
	
	

/* -----------------------------------------------------------------------------*/



