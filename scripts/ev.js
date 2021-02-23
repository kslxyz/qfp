$.getJSON('../data/events.json', function(data) {
    let week1 = '';
    let week2 = '';
    let week3 = '';
    let eventInfo = '';

    $.each(data, function(i, info) {
        if(i<2) {
            week1+=
            `<div class="event" style="background-image: url(../assets/participants/${i+1}.png)">
                <div class="event-title">
                    <p>${info.date}</p>
                    <h3>${info.title}</h3>
                </div>
                <div class="event-p">
                    <p>${info.participants}</p>
                    <div class="e-buttons">
                        <div class="event-button more-info" id="event${i}">
                            <p>Info</p>
                        </div>
                        <a class="register" href="${info.link}" target="_blank">
                            <div class="event-button">
                                <p>Register</p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>`;
        } else if (i>=2 && i<5) {
            week2+=
            `<div class="event" style="background-image: url(../assets/participants/${i+1}.png)">
                <div class="event-title">
                    <p>${info.date}</p>
                    <h3>${info.title}</h3>
                </div>
                <div class="event-p">
                    <p>${info.participants}</p>
                    <div class="e-buttons">
                        <div class="event-button more-info" id="event${i}">
                            <p>Info</p>
                        </div>
                        <a class="register" href="${info.link}" target="_blank">
                            <div class="event-button">
                                <p>Register</p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>`;
        } else if (i>=5) {
            week3+=
            `<div class="event" style="background-image: url(../assets/participants/${i+1}.png)">
                <div class="event-title">
                    <p>${info.date}</p>
                    <h3>${info.title}</h3>
                </div>
                <div class="event-p">
                    <p>${info.participants}</p>
                    <div class="e-buttons">
                        <div class="event-button more-info" id="event${i}">
                            <p>Info</p>
                        </div>
                        <a class="register" href="${info.link}" target="_blank">
                            <div class="event-button">
                                <p>Register</p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>`;
        }
        eventInfo+=
        ` <div class="event-info" id="event${i}-info">
            <div class="event-title">
                <p>${info.date}</p>
                <h3>${info.title}</h3>
            </div>
            <div class="event-descrip">
                <p>${info.description}</p>
            </div>
            <div class="event-p">
                <div class="e-buttons">
                    <a class="register" href="${info.link}" target="_blank">
                        <div class="event-button">
                            <p>Register</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>`;
    });

    $("#week-1").append(week1);
    $("#week-2").append(week2);
    $("#week-3").append(week3);
    $(".sub-event").append(eventInfo);
});

$(document).ready(function() {
    $('.main-container').on('click', '.more-info', function() {
        let thisInfo = $(this).attr('id');
        $(".event-info").removeClass('show');
        $(`#${thisInfo}-info`).addClass('show');
        $(".sub-event").show();
        $(".sub-event").scrollTop(0);
    });

    $(".close").click(function() {
        $(".sub-event").hide();
    });
});