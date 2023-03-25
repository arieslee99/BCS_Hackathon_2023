console.log("Hello");
function taskCollection() {
    var taskName = document.getElementById('task').value;
    document.getElementById("output").innerText = taskName;
}
document.getElementById('button').addEventListener('click',taskCollection);