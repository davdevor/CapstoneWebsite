NavBarHelper = (function($) {
	"use strict";
	var module = {
		onReady : function(){
			$("#navbar").find("a")
			.hover(function(){
				$(this).css("color","blue");			
			}, function(){
				$(this).css("color", "black");
			});
		}
	}
	return module;
})(jQuery);
