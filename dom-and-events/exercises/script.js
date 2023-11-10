function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', liftOff => {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });
    missionAbort.addEventListener('mouseover', function (event) {
        let element = event.target;
        event.target.style.backgroundColor = "red";
    });
    missionAbort.addEventListener('mouseout', function (event) {
        let element = event.target;
        event.target.style.backgroundColor = "";
    });
    missionAbort.addEventListener('click', abortMission => {
        //paragraph.innerHTML = "Are you sure you want to abort the mission?";
        if (confirm("Are you sure you want to abort the mission?") === true){
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
        }
    });
}

window.addEventListener("load", init);
