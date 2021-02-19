$(document).ready(function() {
    $('.main-container').on('click', '.more-info', function() {
        let thisInfo = $(this).attr('id');
        $(".event-info").removeClass('show');
        $(`#${thisInfo}-info`).addClass('show');
        $(".sub-event").show();
    });

    $(".close").click(function() {
        $(".sub-event").hide();
    });
});