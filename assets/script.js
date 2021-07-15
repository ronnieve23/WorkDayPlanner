$(document).ready(function () {
    //I hope to god this displays date and time
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY, h:mm:ss A'))

    //For determining if task is past,present, or future and adding colors
    let currentTime= Number(moment().format("H"))

    function taskColors() {
        $(".tasks").each(function(){
            let taskTime = $(this).parent().attr("id")
                if (taskTime > currentTime){
                    $(this).addClass("future")
                } else if (taskTime == currentTime) {
                    $(this).addClass("present")
                } else {
                    $(this).addClass("past")
                }
        });
    }

    //check time values to apply approriate color as time passes
    setInterval(function(){
        taskColors()
    }, (1000*60)*10)



taskColors();
})


