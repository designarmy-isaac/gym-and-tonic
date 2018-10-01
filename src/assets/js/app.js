import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import libs from './lib/dependancies';
window.libs = libs;

$(document).foundation();

libs.AOS.init();

// slick carousel
$(".slideshow").slick({
  // normal options...
  speed: 3000,
	autoplay: true,
	autoplaySpeed: 3000,
	cssEase: 'linear',
  infinite: true,
  swipeToSlide: true,
	centerMode: true,
  focusOnSelect: true,
  centerPadding: 0,
  fade: true,
  dots: false,
  arrows: false,
  
});