const Task = require('./Task');

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
    }

    editTask(oldTask, newTask) {
        const index = this.tasks.indexOf(oldTask);
        if (index !== -1) {
            this.tasks[index] = newTask;
        }
    }

    getAllTasks() {
        return this.tasks;
    }
}

module.exports = TodoList;
