
import Task from "./classes/Task.js";
import TaskManager from "./classes/TaskManager.js";

showActivesTasks();
showCompletedTasks();

function showActivesTasks() {
    document.getElementById("actives").innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks && tasks.length > 0) {
        for (let task of JSON.parse(localStorage.getItem("tasks"))) {
            document.getElementById("actives").innerHTML +=
                `<div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="d-flex">
                        <ul class="list-group w-100">
                            <li class="list-group-item">${task.TaskDescription}</li>
                        </ul>
                        <button class="btn btn-success m-1 mt-1 h-100" onclick = "addCompletTask('${task.TaskDescription}','${task.id}')"><i class="fa-solid fa-check"></i></button>
                        <button class="btn btn-primary mt-1 h-100" onclick = "updateTaskPrompt('${task.id}')"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn btn-danger m-1 mt-1 h-100" onclick = "deleteActives('${task.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>     
                </div>
            </div>`
        }
    } else {
        document.getElementById("actives").innerHTML +=
            `<div class="text-center" style="color: #ccc"><i>Active tasks list is empty.</i></div>`
    }

}

function showCompletedTasks() {
    document.getElementById("completed").innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("completed"));
    if (tasks && tasks.length > 0) {
        for (let task of JSON.parse(localStorage.getItem("completed"))) {
            document.getElementById("completed").innerHTML +=
                `<div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="d-flex">
                       <ul class="list-group w-100">
                          <li class="list-group-item"><span style="text-decoration: line-through;">${task.TaskDescription}<span></li>
                       </ul>
                    <button class="btn btn-danger m-1 mt-1 h-100" onclick = "emptyingbin('${task.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    </div>
             </div>`
        }
    } else {
        document.getElementById("completed").innerHTML +=
            `<div class="text-center" style="color: #ccc"><i>Completed tasks list is empty.</i></div>`
    }
}

let manager = new TaskManager();

window.addNewTask = function addNewTask() {
   const task = document.getElementById("floatingInput").value.trim()
    if (task == "") {
        alert("Must enter a task")
    } else {
        manager.addTask(new Task(task));
        showActivesTasks();
        document.getElementById("floatingInput").value = "";
    }

};

window.addCompletTask = function addCompletTask(task, id) {
    manager.AddcompletedTask(new Task(task));
    deleteCompleted(id);
    showCompletedTasks();

}

window.deleteActives = function deleteActives(id) {
    if (confirm("sure?"))
        manager.deleteTask(id);
    showActivesTasks();

}

window.deleteCompleted = function deleteCompleted(id) {
    if (confirm("mission accomplished?"))
        manager.deleteTask(id);
    showActivesTasks();

}

window.emptyingbin = function emptyingbin(id) {
    if (confirm("to empty a little?"))
        manager.deleteCompletedTasks(id);
    showCompletedTasks();

}

window.updateTaskPrompt = function updateTaskPrompt(id) {
    let update = prompt("Enter new task:");
    manager.updateTaskDescription(id, update);
    showActivesTasks();
}













