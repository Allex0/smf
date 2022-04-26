$(function() {
	$('ul.dropmenu, ul.quickbuttons').superfish({delay : 250, speed: 100, sensitivity : 8, interval : 50, timeout : 1});

	// tooltips
	$('.preview').SMFtooltip();

	// find all nested linked images and turn off the border
	$('a.bbc_link img.bbc_img').parent().css('border', '0');
});

// The purpose of this code is to fix the height of overflow: auto blocks, because some browsers can't figure it out for themselves.
function smf_codeBoxFix()
{
	var codeFix = $('code');
	$.each(codeFix, function(index, tag)
	{
		if (is_webkit && $(tag).height() < 20)
			$(tag).css({height: ($(tag).height() + 20) + 'px'});

		else if (is_ff && ($(tag)[0].scrollWidth > $(tag).innerWidth() || $(tag).innerWidth() == 0))
			$(tag).css({overflow: 'scroll'});

		// Holy conditional, Batman!
		else if (
			'currentStyle' in $(tag) && $(tag)[0].currentStyle.overflow == 'auto'
			&& ($(tag).innerHeight() == '' || $(tag).innerHeight() == 'auto')
			&& ($(tag)[0].scrollWidth > $(tag).innerWidth() || $(tag).innerWidth == 0)
			&& ($(tag).outerHeight() != 0)
		)
			$(tag).css({height: ($(tag).height + 24) + 'px'});
	});
}

// Add a fix for code stuff?
if (is_ie || is_webkit || is_ff)
	addLoadEvent(smf_codeBoxFix);

// Toggles the element height and width styles of an image.
function smc_toggleImageDimensions()
{
	$('.postarea .bbc_img.resized').each(function(index, item)
	{
		$(item).click(function(e)
		{
			$(item).toggleClass('original_size');
		});
	});
}

// Add a load event for the function above.
addLoadEvent(smc_toggleImageDimensions);

function smf_addButton(stripId, image, options)
{
	$('#' + stripId).append(
		'<a href="' + options.sUrl + '" class="button last" ' + ('sCustom' in options ? options.sCustom : '') + ' ' + ('sId' in options ? ' id="' + options.sId + '_text"' : '') + '>'
			+ options.sText +
		'</a>'
	);
}
/* global jQuery */
/* global document */
jQuery(function() {
	'use strict';
	document.addEventListener("touchstart", function() {}, false);
	jQuery(function() {
		jQuery('<div class="overlapblackbg"></div>').prependTo('.horizontalMenu');
		jQuery('#horizontal-navtoggle').click(function() {
			jQuery('body').toggleClass('active');
		});
		jQuery('.overlapblackbg').click(function() {
			jQuery("body").removeClass('active');
		});
		jQuery('.horizontalMenu > .horizontalMenu-list > li').has('.sub-menu').prepend('<span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
		jQuery('.horizontalMenu > .horizontalMenu-list > li').has('.horizontal-megamenu').prepend('<span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
		jQuery('.horizontalMenu-click').click(function() {
			jQuery(this).toggleClass('ws-activearrow').parent().siblings().children().removeClass('ws-activearrow');
			jQuery(".horizontalMenu > .horizontalMenu-list > li > .sub-menu, .horizontal-megamenu").not(jQuery(this).siblings('.horizontalMenu > .horizontalMenu-list > li > .sub-menu, .horizontal-megamenu')).slideUp('slow');
			jQuery(this).siblings('.sub-menu').slideToggle('slow');
			jQuery(this).siblings('.horizontal-megamenu').slideToggle('slow');
		});
		jQuery('.horizontalMenu > .horizontalMenu-list > li > ul > li').has('.sub-menu').prepend('<span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
		jQuery('.horizontalMenu > .horizontalMenu-list > li > ul > li > ul > li').has('.sub-menu').prepend('<span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
		jQuery('.horizontalMenu-click02').click(function() {
			jQuery(this).children('.horizontalMenu-arrow').toggleClass('horizontalMenu-rotate');
			jQuery(this).siblings('li > .sub-menu').slideToggle('slow');
		});
		jQuery(window).on('resize', function() {
			if (jQuery(window).outerWidth() < 992) {
				jQuery('.horizontalMenu').css('height', jQuery(this).height() + "px");
				jQuery('.horizontalMenucontainer').css('min-width', jQuery(this).width() + "px");
			} else {
				jQuery('.horizontalMenu').removeAttr("style");
				jQuery('.horizontalMenucontainer').removeAttr("style");
				jQuery('body').removeClass("active");
				jQuery('.horizontalMenu > .horizontalMenu-list > li > .horizontal-megamenu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu > li > ul.sub-menu, .horizontalMenu > .horizontalMenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu').removeAttr("style");
				jQuery('.horizontalMenu-click').removeClass("ws-activearrow");
				jQuery('.horizontalMenu-click02 > i').removeClass("horizontalMenu-rotate");
			}
		});
		jQuery(window).trigger('resize');
	});
	//Mobile Search Box
	jQuery(window).on("load", function() {
		jQuery('.horizontal-header .wssearch').on("click", function() {
			jQuery(this).toggleClass("wsopensearch");
		});
		jQuery("body, .wsopensearch .fa.fa-times").on("click", function() {
			jQuery(".wssearch").removeClass('wsopensearch');
		});
		jQuery(".wssearch, .wssearchform form").on("click", function(e) {
			e.stopPropagation();
		});
	});
}());
$(function() {
	var darkSwitch = document.getElementById("darkSwitch");
	if (darkSwitch) {
	  initTheme();
	  darkSwitch.addEventListener("change", function(event) {
		resetTheme();
	  });
	  function initTheme() {
		var darkThemeSelected =
		  localStorage.getItem("darkSwitch") !== null &&
		  localStorage.getItem("darkSwitch") === "dark";
		darkSwitch.checked = darkThemeSelected;
		darkThemeSelected
		  ? document.body.setAttribute("data-theme", "dark")
		  : document.body.removeAttribute("data-theme");
	  }
	  function resetTheme() {
		if (darkSwitch.checked) {
		  document.body.setAttribute("data-theme", "dark");
		  localStorage.setItem("darkSwitch", "dark");
		} else {
		  document.body.removeAttribute("data-theme");
		  localStorage.removeItem("darkSwitch");
		}
	  }
	}
  });
  $(document).ready(function(){
	dropdownHover();
	$(".scroll-to-top").click(function()	{
		$("html, body").animate({ scrollTop: 0 }, 600);
		 return false;
	});
	$(window).scroll(function(){
			
		 var position = $(window).scrollTop();
		
		 if(position >= 200)	{
			$(".scroll-to-top").addClass("active")
		 }
		 else	{
			$(".scroll-to-top").removeClass("active")
		 }
	});
	$( ".navbar-toggle").click(function(){
		$("#menu").addClass("show-menu");
	});
}); 
$(window).resize(function(){
	dropdownHover();
});
function dropdownHover() {
	if ($(window).width() >= 768) { 
		$(".dropdown.first-level").hover(           
			function() {
				$(".dropdown-menu", this).stop( true, true ).fadeIn("fast");
				$(this).toggleClass("open");
			},
			function() {
				$(".dropdown-menu", this).stop( true, true ).fadeOut("fast");
				$(this).toggleClass("open");
		});
	}
	else
	{
		$(".dropdown.first-level .dropdown-toggle").each(function() {                 
			$(this).attr('data-toggle', 'dropdown');
		});
	}
}
