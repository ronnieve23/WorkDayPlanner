//local storage
let taskLists = JSON.parse(localStorage.getItem('taskLists')) || [];

$(document).ready(function () {
    //I hope to god this displays date and time
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    $('#currentTime').text(moment().format('h:mm a'));

    //For determining if task is past,present, or future and adding colors
    let currentTime = Number(moment().format("H"))

    function taskColors() {
        $(".tasks").each(function () {
            let taskTime = $(this).parent().attr("id")
            if (taskTime > currentTime) {
                $(this).addClass("future")
            } else if (taskTime == currentTime) {
                $(this).addClass("present")
            } else {
                $(this).addClass("past")
            }
        });
    }

    //check time values to apply approriate color as time passes
    setInterval(function () {
        taskColors()
    }, (1000))

    //This where we start saving tasks

    $(".hoursRow").on("click", ".saveBtn", function() {
        let hourID = $(this).parent().attr("id")

        //stores task input
        let taskInput = $(this).prev(".tasks").val().trim();

        //store values to an object
        let taskObj = {
            hour: hourID,
            task: taskInput
        }

        //index tracking
        let indexValue;
        //is the hour block in the array?
        let inArray = false;
        for (let i = 0; i < taskLists.lenght; i++) {
            let taskEl = taskLists[i];
            //if hour block is in array
            if (taskEl.hour == hourID) {
                //set index value to current index
                indexValue = i
                inArray = true;
                break;
            };
        };

        //if item exists in array
        if (inArray) {
        //change index value to value of new task
        taskLists[indexValue] = taskObj;
        //else push ubject to array
        } else {
            taskLists.push(taskObj)
        }

        localStorage.setItem("taskLists", JSON.stringify(taskLists));
    });

    $(".hoursRow").each(function() {
        for (let i = 0; i < taskLists.lenght; i++) {
            if ($(this).attr("id") == taskLists[i].hour){
                let taskText = $(this).prev(".tasks").val();
                let taskBox = $("<div>");
                taskText = taskLists[i].task;
                $(this).children("textarea").append(taskText)

            };
        };
    });

    taskColors();
})


