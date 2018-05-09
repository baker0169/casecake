
var docu = $(document);

$(function() {
	var tabfirst = $(".tab").first();
	var tab = $(".tab");

	$(".buy-tab-content").each(function() {
			$(this).find('.tab-box').eq(0).show().siblings().hide();
	});
	docu.on("click", '.tab', function() {
		var $this = $(this);
		var tabindex = $(this).index();
		var tab_box = $(this).parent().siblings('.buy-tab-content').find('.tab-box');
		$this.addClass("act").siblings().removeClass("act");
		$(tab_box).eq(tabindex).show().siblings(".tab-box").hide();
	});

	docu.on("click", '.rwd-btn', function() {
		var $this = $(this);
		$('.rwd-btn-menu-box').addClass('menu-show');
	});
	docu.on("click", '.rwd-close', function() {
		var $this = $(this);
		$('.rwd-btn-menu-box').removeClass('menu-show');
	});
});