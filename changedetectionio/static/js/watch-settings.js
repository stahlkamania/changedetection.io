$(document).ready(function() {
    function toggle() {
        if ($('input[name="fetch_backend"]:checked').val() != 'html_requests') {
            $('#requests-override-options').hide();
            $('#webdriver-override-options').show();
        } else {
            $('#requests-override-options').show();
            $('#webdriver-override-options').hide();
        }
    }
    $('input[name="fetch_backend"]').click(function (e) {
        toggle();
    });
    toggle();

});
