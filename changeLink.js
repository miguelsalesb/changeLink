jQuery(document).ready(function($) {
var number = $('.cover').length;
var x = -1;
	$('.cover a').each(function() {
		var that = $(this);
		capaLink = $(this).attr('href');
		$.get( capaLink, that, function( data ) {
			var link;
			x++;
			var numAnchors = $(data).find('a').length;
			for (var k=0;k < numAnchors; k++) {
				if ( $(data).find('a').eq(k).is( "[href*='purl']" ) ) {
					link = ($(data).find('a').eq(k).attr('href'));
	               	that.attr("href", link);
                    that.attr("target", "_blank");
                    that.attr("title", "Acesso à cópia digital");
					break;
				}
			}
		});
	});
	$('.book-title a').each(function() {
		var that = $(this);
		capaLink = $(this).attr('href');
		$.get( capaLink, that, function( data ) {
			var link;
			x++;
			var numAnchors = $(data).find('a').length;
			for (var k=0;k < numAnchors; k++) {
				if ( $(data).find('a').eq(k).is( "[href*='purl']" ) ) {
					link = ($(data).find('a').eq(k).attr('href'));
					that.attr("href", link);
                    that.attr("target", "_blank");
                    that.attr("title", "Acesso à cópia digital");
				break;
			}
		}
	});
});