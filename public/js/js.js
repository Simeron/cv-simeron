$(function(){
		$(".button-collapse").sideNav();

		function scrollBanner() {
  		$(document).scroll(function(){
				var scrollPos = $(this).scrollTop();
				$('#banner-text').css({
					'top' : (scrollPos/3)+'px',
					'opacity' : 1-(scrollPos/510)
				});
				$('#banner').css({
					'background-position' : 'center ' + (-scrollPos/2)+'px'
				});
			});    
		}
		scrollBanner();

		$('#bioLink').click(function (){
			scrollToElement($('#bio'));
		});

		$('#projectLink').click(function (){
			scrollToElement($('#projects'));
		});

		$('#experienceLink').click(function (){
		scrollToElement($('#experience'));
		});

		$('#skillsLink').click(function (){
			scrollToElement($('#skills'));
		});

		$('#contactLink').click(function (){
			scrollToElement($('#contact'));
		});

		$('#whatICanDoLink').click(function (){
			scrollToElement($('#whatICanDo'));
		});

		function scrollToElement(element){
		    $('html,body').animate({
          scrollTop: element.offset().top - 50
        }, 1000);
		}

});



