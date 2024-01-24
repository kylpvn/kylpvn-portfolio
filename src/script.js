

/******************************************************************************************************************************
Waypoints
*******************************************************************************************************************************/ 

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/******************************************************************************************************************************
Nav Button
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});


$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 125
				}, 1000);
				return false;
			}
		}
	});

});

/******************************************************************************************************************************
Nav Transform
*******************************************************************************************************************************/ 

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/******************************************************************************************************************************
Flexsliders
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('#blogSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	
		$('#clientSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

/******************************************************************************************************************************
Projects
*******************************************************************************************************************************/ 
window.addEventListener('load', () => {
	var
		carousels = document.querySelectorAll('.carousel')
	;

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	var
		figure = root.querySelector('figure'),
		nav = root.querySelector('nav'),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = 'bfc' in root.dataset,
		
		theta =  2 * Math.PI / n,
		currImage = 0
	;
	
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => { 
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
	});

	setupNavigation();

	function setupCarousel(n, s) {
		var	
			apothem = s / (2 * Math.tan(Math.PI / n))
		;
		
		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

		for (var i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				 images[i].style.backfaceVisibility = 'hidden';
		
		rotateCarousel(currImage);
	}

	function setupNavigation() {
		nav.addEventListener('click', onClick, true);
		
		function onClick(e) {
			e.stopPropagation();
			
			var t = e.target;
			if (t.tagName.toUpperCase() != 'BUTTON')
				return;
			
			if (t.classList.contains('next')) {
				currImage++;
			}
			else {
				currImage--;
			}
			
			rotateCarousel(currImage);
		}
			
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
	
	
}


document.addEventListener('DOMContentLoaded', () => {
	const images = document.querySelectorAll('#carousel-images img');
	const details = document.querySelectorAll('.project-details');
	let currentIndex = 0;
  
	function updateCarousel(index) {
	  // Reset all images and details to non-active
	  images.forEach(img => img.classList.remove('active'));
	  details.forEach(detail => detail.classList.remove('active'));
  
	  // Set the selected image and details to active
	  images[index].classList.add('active');
	  details[index].classList.add('active');
	}
  
	document.querySelector('.nav.prev').addEventListener('click', () => {
	  currentIndex = (currentIndex - 1 + images.length) % images.length;
	  updateCarousel(currentIndex);
	});
  
	document.querySelector('.nav.next').addEventListener('click', () => {
	  currentIndex = (currentIndex + 1) % images.length;
	  updateCarousel(currentIndex);
	});
  
	// Initialize the carousel
	updateCarousel(currentIndex);
  });
  