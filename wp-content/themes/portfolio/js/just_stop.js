$(window).on('load', function () {
    let headerHeight = $('header').outerHeight();
    let urlHash = location.hash;
    if (urlHash) {
        let position = $(urlHash).offset().top - headerHeight;
        $('html, body').animate({ scrollTop: position }, 0);
    }
});