//local storage
let taskList = JSON.parse(localStorage.getItem('taskLists')) || [];

$(document).ready(function () {
    //I hope to god this displays date and time
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    $('#currentTime').text(moment().format('h:mm a'));

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
    }, (1000))

    //This where we start saving tasks

    $(".hoursRow").on("click",".saveBtn")

taskColors();
})


