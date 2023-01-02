

export default class TaskManager {
    constructor() {
        this.ActiveTasktsArr = JSON.parse(localStorage.getItem("tasks")) || [];
        this.CompletedTasktsArr = JSON.parse(localStorage.getItem("completed")) || [];
    }

    addTask(nawTask) {
        this.ActiveTasktsArr.push(nawTask);
        localStorage.setItem("tasks",JSON.stringify(this.ActiveTasktsArr));
    }


    deleteTask(id) {
        this.ActiveTasktsArr = this.ActiveTasktsArr.filter((task) => task.id != id)
        localStorage.setItem("tasks", JSON.stringify(this.ActiveTasktsArr));
    }

    updateTaskDescription(id, newTask) {
        this.ActiveTasktsArr.find((task) => task.id == id ? task.TaskDescription = newTask : false)
        localStorage.setItem("tasks", JSON.stringify(this.ActiveTasktsArr));

    }

    AddcompletedTask(completedTask) {
        this.CompletedTasktsArr.push(completedTask);
        localStorage.setItem("completed", JSON.stringify(this.CompletedTasktsArr));

    }

    deleteCompletedTasks(id) {
        this.CompletedTasktsArr = this.CompletedTasktsArr.filter((task) => task.id != id)
        localStorage.setItem("completed", JSON.stringify(this.CompletedTasktsArr));
    }

}