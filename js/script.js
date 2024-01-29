document.addEventListener('DOMContentLoaded', function(event) {	

  if(document.querySelector('.cases__wrapper')){
		document.querySelectorAll('.cases__wrapper').forEach(function(wrapper) {
		  var slider = wrapper.querySelector('.cases__slider');
		  if(slider){
			  var swiper = new Swiper(slider, {
			    speed: 600,
			    spaceBetween: 20,
			    slidesPerView: 1,
			    mousewheel: {
			        forceToAxis: true,
			    },
			    freeMode:true,
			    navigation: {
			      prevEl: wrapper.querySelector('.cases__prev'),
			      nextEl: wrapper.querySelector('.cases__next'),
			    },
		      breakpoints:{
		      	981:{
		      		spaceBetween: 20,
		      	},
		      	0:{
		      		spaceBetween: 13,
		      	}
		      }
			  });		  	
		  }
		});  	
  }
  if(document.querySelector('.reviews__wrapper')){
		document.querySelectorAll('.reviews__wrapper').forEach(function(wrapper) {
		  var slider1 = wrapper.querySelector('.reviews__slider');
		  if(slider1){
			  var swiper = new Swiper(slider1, {
			    speed: 600,
			    spaceBetween: 20,
			    slidesPerView: 3,
			    mousewheel: {
			        forceToAxis: true,
			    },
			    freeMode:true,
			    navigation: {
			      prevEl: wrapper.querySelector('.reviews__prev'),
			      nextEl: wrapper.querySelector('.reviews__next'),
			    },
		      breakpoints:{
		      	1160:{
		      		slidesPerView: 3,
		      		spaceBetween: 20,
		      	},
		      	768:{
		      		slidesPerView: 2,
		      		spaceBetween: 14,
		      	},
		      	0:{
		      		slidesPerView: 1,
		      	}
		      }
			  });		  	
		  }
		});  	
  }
  if(document.querySelector('.programms__wrappers')){
		document.querySelectorAll('.programms__wrappers').forEach(function(wrapper) {
		  var slider2 = wrapper.querySelector('.programms__slider');
		  if(slider2){
			  var swiper = new Swiper(slider2, {
			    speed: 600,
			    spaceBetween: 20,
			    slidesPerView: 3,
			    mousewheel: {
			        forceToAxis: true,
			    },
			    freeMode:true,
			    navigation: {
			      prevEl: wrapper.querySelector('.programms__prev'),
			      nextEl: wrapper.querySelector('.programms__next'),
			    },
		      breakpoints:{
		      	1160:{
		      		slidesPerView: 3,
		      		spaceBetween: 20,
		      	},
		      	768:{
		      		slidesPerView: 2,
		      		spaceBetween: 14,
		      	},
		      	0:{
		      		slidesPerView: 1,
		      	}
		      }
			  });		  	
		  }
		});  	
  }
	var headerBurger = document.querySelector('.header__burger');
	var body = document.querySelector('body');
	var menu = document.querySelector('.menu');
	if(headerBurger){
		headerBurger.addEventListener('click', function(event){
			headerBurger.classList.toggle('active');
			menu.classList.toggle('open');
			body.classList.toggle('lock');
		})
	}

	var menuLinks = document.querySelectorAll('.menu__link, .menu__mobile>a');
	if(menuLinks){
		menuLinks.forEach(function(menuLinks){
			menuLinks.addEventListener('click', function(event){
				headerBurger.classList.remove('active');
				menu.classList.remove('open');
				body.classList.remove('lock');
			})
		});
	}

	var dataPopup = document.querySelectorAll('[data-topopup]');
	if(dataPopup){
		dataPopup.forEach(function(dataPopup){
			dataPopup.addEventListener('click', function(event){
				event.preventDefault();
				var dataContent = document.querySelector(this.getAttribute('data-topopup'));
				if(dataContent){
					dataContent.classList.add('open');
					body.classList.add('lockPopup');
				}
			})
		});
	}
	var popupClose = document.querySelectorAll('.popup__close, .popup__body .button, .popup__body .button-blue');
	if(popupClose){
		popupClose.forEach(function(popupClose){
			popupClose.addEventListener('click', function(event){
				popupClose.closest('.popup').classList.remove('open');
				body.classList.remove('lockPopup');
			})
		});
	}

});
