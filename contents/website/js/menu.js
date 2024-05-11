(function($) {

    $(document).ready(function() {
        $('.toggle-nav').on('click', function() {
            toggleNavigation($(this), $('.nav-pane'));
            changeLetters($(this));
        });

        function toggleNavigation(btn, nav) {
            btn.toggleClass('open');
            nav.toggleClass('open');
        }

    });

})(jQuery);