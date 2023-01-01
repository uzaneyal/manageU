
export default class Task {
    constructor(TaskDescription) {
        this.id = Math.floor(Math.random() * 1001);
        this.TaskDescription = TaskDescription;
        this.taskStatus = false;
    }
    get(propName) {
        return this[propName]
    }
    set(propName, value) {
        this[propName] = value;

    }
}