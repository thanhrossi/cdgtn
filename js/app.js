"use strict";
var App = {
	init: function(){
		App.siteNav();
	},
	siteNav: function(){
		var wW = $(window).width();
		var $menuIcon = $('.menu-icon');
		var $trigger = $('.trigger');

		$menuIcon.on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$trigger.toggle();
		});

	}
};
$(document).ready(function() {
	App.init();
});