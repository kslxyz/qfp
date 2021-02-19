$.getJSON('../data/participants.json', function(data) {
    let html = '';

    $.each(data, function(i, p) {
        html+=
        `<div class="participant">
        <div class="par-content">
        <div class="headshot">
            <div>
                <img src="../${p.headshot}"/>
            </div>
        </div>
        <div class="name">
            <p>${p.role}</p>
            <h4>${p.name}</h4>
            <p>${p.affiliation}</p>
        </div>
        <div class="bio">
            <p>${p.bio}</p>
        </div>
    </div>
    </div>`
    });

    $(".grid").append(html);
});

$(document).ready(function() {
    $(document).on('mouseenter', '.name', function() {
        let thisP = $(this).closest(".participant");
        let thisBio = $(this).siblings(".bio").position().top;
        $(thisP).addClass("hover");
        $(thisP).animate({
            scrollTop: thisBio
        }, 500);


    });

    $(document).on('mouseleave', '.participant', function() {
        $(this).removeClass("hover");
        $(this).animate({
            scrollTop: 0
        }, 400);
    });
});