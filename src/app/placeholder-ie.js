var isIE10 = false;

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // test values
  // IE 10
  //ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  // IE 11
  //ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  // IE 12 / Spartan
  //ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // IE 12 => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

	// other browser
  return false;
}

isIE10 = detectIE();
//isIE10 = true;

if (isIE10) {
	(function($) {

		function measureWidth(deflt) {
			var dummy = $('<span></span>').text(deflt).css('visibility', 'hidden').appendTo(document.body);
			var result = dummy.width();
			dummy.remove();
			return result;
		}

		function toggleLabel(e) {
			var input = $(e.target);
			var deflt = input.attr('title');
			var span = input.prev('div');

			setTimeout(function() {
				if (!input.val() || (input.val() == deflt)) {
					span.css('visibility', '');
					if (deflt) {
						span.css('margin-left', measureWidth(deflt) + 2 + 'px');
					}
				} else {
					span.css('visibility', 'hidden');
				}
			}, 0);
		}

		$(document).on('cut', 'input, textarea', toggleLabel);
		$(document).on('keydown', 'input, textarea', toggleLabel);
		$(document).on('paste', 'input, textarea', toggleLabel);
		$(document).on('change', 'select', toggleLabel);

		$(document).on('focusin', 'input, textarea', function() {
			$(this).prev('span').css('color', '#ccc');
		});

		$(document).on('focusout', 'input, textarea', function(e) {
			toggleLabel(e);
			$(this).prev('span').css('color', '#999');
		});

		function init() {
			$('input, textarea, select').each(toggleLabel);
		}

		// Set things up as soon as the DOM is ready.
		$(init);

		// Do it again to detect Chrome autofill.
		$(window).load(function() {
			setTimeout(init, 0);
		});

		function removePlaceholder() {
			if ($('.placeholder-ie input').attr('placeholder')){
				$('.placeholder-ie input').removeAttr('placeholder');
				console.log('placeholder removed');
			} else {
				setTimeout(removePlaceholder, 100);
				console.log('placeholder not loaded');
			}
		}

		$(document).ready(function() {
			$('body').addClass('ie10');
			removePlaceholder();
		});

	})(jQuery);
}
