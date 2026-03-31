let startTime;
let sentence = document.getElementById("sentence").innerText;

document.getElementById("input").addEventListener("input", function() {
    let typed = this.value;

    if (!startTime) startTime = new Date();

    let elapsed = (new Date() - startTime) / 1000;

    let words = typed.split(" ").length;
    let wpm = Math.round((words / elapsed) * 60);

    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === sentence[i]) correct++;
    }

    let accuracy = Math.round((correct / sentence.length) * 100);

    document.getElementById("wpm").innerText = "WPM: " + wpm;
    document.getElementById("accuracy").innerText = "Accuracy: " + accuracy + "%";
});

function restart() {
    location.reload();
}