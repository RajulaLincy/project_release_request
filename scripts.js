$(document).ready(function() {
    // Hover effect for skills
    $('.skills li').hover(
        function() {
            $(this).css('background-color', '#d4edda');
        },
        function() {
            $(this).css('background-color', '#e0e0e0');
        }
    );

    // Click effect for experience jobs
    $('.experience .job').click(function() {
        $(this).toggleClass('expanded');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
