const checked = document.getElementById("buttons")

checked.addEventListener("click", function() {
    const daily = document.getElementById("daily")
    const weekly = document.getElementById("weekly")
    const monthly = document.getElementById("monthly")
    const workTime = document.getElementById("work-time")
    const workLastWeek = document.getElementById("last-week-work")
    const playTime = document.getElementById("play-time")
    const playLastWeek = document.getElementById("last-week-play")
    const studyTime = document.getElementById("study-time")
    const studyLastWeek = document.getElementById("last-week-study")
    const exerciseTime = document.getElementById("exercise-time")
    const exerciseLastWeek = document.getElementById("last-week-exercise")
    const socialTime = document.getElementById("social-time")
    const socialLastWeek = document.getElementById("last-week-social")
    const selfCareTime = document.getElementById("self-care-time")
    const selfCareLastWeek = document.getElementById("last-week-self-care")

    if (daily.checked) {
        workTime.innerHTML = "5hrs"
        workLastWeek.innerHTML = "Last Week - 7hrs"
        playTime.innerHTML = "1hrs"
        playLastWeek.innerHTML = "Last Week - 2hrs"
        studyTime.innerHTML = "0hrs"
        studyLastWeek.innerHTML = "Last Week - 1hrs"
        exerciseTime.innerHTML = "1hrs"
        exerciseLastWeek.innerHTML = "Last Week - 1hrs"
        socialTime.innerHTML = "1hrs"
        socialLastWeek.innerHTML = "Last Week - 3hrs"
        selfCareTime.innerHTML = "0hrs"
        selfCareLastWeek.innerHTML = "Last Week - 1hrs"
    }

    if (weekly.checked) {
        workTime.innerHTML = "32hrs"
        workLastWeek.innerHTML = "Last Week - 36hrs"
        playTime.innerHTML = "10hrs"
        playLastWeek.innerHTML = "Last Week - 8hrs"
        studyTime.innerHTML = "4hrs"
        studyLastWeek.innerHTML = "Last Week - 7hrs"
        exerciseTime.innerHTML = "4hrs"
        exerciseLastWeek.innerHTML = "Last Week - 5hrs"
        socialTime.innerHTML = "5hrs"
        socialLastWeek.innerHTML = "Last Week - 10hrs"
        selfCareTime.innerHTML = "2hrs"
        selfCareLastWeek.innerHTML = "Last Week - 2hrs"
    }

    if (monthly.checked) {
        workTime.innerHTML = "103hrs"
        workLastWeek.innerHTML = "Last Week - 128hrs"
        playTime.innerHTML = "23hrs"
        playLastWeek.innerHTML = "Last Week - 29hrs"
        studyTime.innerHTML = "13hrs"
        studyLastWeek.innerHTML = "Last Week - 19hrs"
        exerciseTime.innerHTML = "11hrs"
        exerciseLastWeek.innerHTML = "Last Week - 18hrs"
        socialTime.innerHTML = "21hrs"
        socialLastWeek.innerHTML = "Last Week - 23hrs"
        selfCareTime.innerHTML = "7hrs"
        selfCareLastWeek.innerHTML = "Last Week - 11hrs"

    }
})