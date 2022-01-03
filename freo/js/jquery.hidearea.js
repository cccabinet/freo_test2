(function($) {
	$.fn.hidearea = function(option) {
		var settings = $.extend({
			view: 'hidearea',
			color: '#000000',
			speed: null,
			close: false
		}, option);

		$(this).each(function() {
			$(this).before('<p><span class="hidearea">' + ($(this).attr('title') ? $(this).attr('title') : settings.view) + '</span></p>').css('color', settings.color).hide();
		});

		$('span.hidearea').click(function() {
			if (settings.close) {
				$(this).parent().next().toggle(settings.speed);
			} else {
				$(this).hide().parent().next().show(settings.speed);
			}
		});

		return this;
	};
})(jQuery);
