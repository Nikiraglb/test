const { describe, test, expect, beforeEach } = require('@jest/globals');
const Task = require('./Task');
const TodoList = require('./TodoList');

describe('Task', () => {
    test('markCompleted должен помечать задачу как выполненную', () => {
        const task = new Task('Test Task');
        task.markCompleted();
        expect(task.completed).toBe(true);
    });
});

describe('TodoList', () => {
    let todoList;
    let task;

    beforeEach(() => {
        todoList = new TodoList();
        task = new Task('Test Task');
    });

    test('добавить задачу в список', () => {
        todoList.addTask(task);
        expect(todoList.getAllTasks()).toContain(task);
    });

    test('removeTask должен удалить задачу из списка', () => {
        todoList.addTask(task);
        todoList.removeTask(task);
        expect(todoList.getAllTasks()).not.toContain(task);
    });

    test('editTask должен заменить старую задачу новой задачей', () => {
        todoList.addTask(task);
        const newTask = new Task('New Task');
        todoList.editTask(task, newTask);
        expect(todoList.getAllTasks()).toContain(newTask);
        expect(todoList.getAllTasks()).not.toContain(task);
    });

    test('getAllTasks должен возвращать все задачи', () => {
        todoList.addTask(task);
        const tasks = todoList.getAllTasks();
        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toBe('Test Task');
    });
});
