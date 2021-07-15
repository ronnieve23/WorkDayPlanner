//display date and time

    var getTime = function () {
        var timeNow = moment().format('LLLL');
        $("#currentDay").text(timeNow);

        currentTime = moment().hour();
    }


