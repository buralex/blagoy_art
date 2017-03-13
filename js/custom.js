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

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
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
function navbar(collapse) {
	
	function handler() {
		if (window.innerWidth < 769) {
			document.querySelector(collapse).classList.add('navbar__collapse--in');
		} else {
			document.querySelector(collapse).classList.remove('navbar__collapse--in');
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



