$(document).ready(function() {
    var $window = $(window),
        $header = $('header'),
        $sub_header = $('#sub-header'),
        $sub_header_center = $('#sub-header-center'),
        $video = $('#video-yucatan'),
        $video_overlay = $('#video-overlay'),
        $container = $('#container'),
        $diver = $('#diver'),
        last_scroll_position = 0;

    var repositionContainer = function() {
        $container.css(
            'top', $window.height()
        );
    };
    repositionContainer();

    var resizeElements = function() {
        var client_height = $window.height(),
            client_width = $window.width();

        if (client_width >= 600) { // Because video disappears under 600px
            $video.width(client_width);
            var additional_width = 0;
            while ($video.height() < client_height) {
                additional_width += 100;
                $video.width(client_width + additional_width);
            }

            $video_overlay.width(client_width);

            $header.height(client_height);
            $sub_header.height(client_height);

            // Vertically center #sub-header-center:
            var sub_header_center_height = $sub_header_center.height();
            $sub_header_center.css('margin-top', -sub_header_center_height / 2);
        }
    };
    resizeElements();

    window.onresize = function() {
        repositionContainer();
        resizeElements();

        window.onscroll();
    }

    sub_header = document.getElementById('sub-header');

    window.onscroll = function() {
        var scroll_position = $window.scrollTop(),
            client_height = $window.height(),
            scroll_ratio = scroll_position / client_height; // A ratio of how far it has scrolled

        // The main header scrolls up faster:
        $video_overlay.css('top', scroll_position * -1.333);

        // Fade out video and #sub-header at certain thresholds:
        $video.css('opacity', 1.2 - scroll_ratio);
        $sub_header.css('opacity', 2.5 - scroll_ratio);

        // Lock #sub-header into fixed position once it has scrolled into place:
        $sub_header.css(
            'position', (scroll_position >= client_height) ? 'fixed' : 'absolute'
        );
        $sub_header.css('top', -75 * scroll_ratio);

        var main_offset = $('#main').offset().top;
            client_width = $(window).width();

        var diver_offset_top = parseInt($diver.css('top'), 10);
        if(diver_offset_top && diver_offset_top > -720 ) {
            $diver.show();
            $('.reef').show();
        }
        else {
            $diver.hide();
            $('.reef').hide();
        }

        $diver.css('margin-left', client_width / 60);
        $diver.css('top', (scroll_position - main_offset - 400) * 1.02);

        // Code from here on is buggy:
        var direction = +1
        if (scroll_position < last_scroll_position) {
            direction = -1;
        }
        last_scroll_position = scroll_position;

        $('.reef').each(function() {
            var prev_top = parseInt($(this).css('top'), 10);
            if (prev_top < -500) {
                $(this).css('top', client_height + (direction * 500));
            }
            else {
                $(this).css('top', prev_top - (direction * 4));
            }
        });
    }

    // Call once to reposition stuff:
    window.onresize();
});
