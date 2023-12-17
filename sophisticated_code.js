/**
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a sophisticated and elaborate example of a web application that allows users to create and manage tasks.
 */

// Define the Task class
class Task {
  constructor(id, title, description, dueDate, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  completeTask() {
    this.completed = true;
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }

  editDescription(newDescription) {
    this.description = newDescription;
  }

  editDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
}

// Define the TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, dueDate) {
    const newTaskId = this.tasks.length + 1;
    const newTask = new Task(newTaskId, title, description, dueDate, false);
    this.tasks.push(newTask);
  }

  deleteTask(taskId) {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  getTasksByStatus(completed) {
    return this.tasks.filter((task) => task.completed === completed);
  }

  getAllTasks() {
    return this.tasks;
  }

  editTaskTitle(taskId, newTitle) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.editTitle(newTitle);
    }
  }

  editTaskDescription(taskId, newDescription) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.editDescription(newDescription);
    }
  }

  editTaskDueDate(taskId, newDueDate) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.editDueDate(newDueDate);
    }
  }

  completeTask(taskId) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.completeTask();
    }
  }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask('Task 1', 'Description 1', '2022-12-31');
taskManager.addTask('Task 2', 'Description 2', '2022-12-25');
taskManager.addTask('Task 3', 'Description 3', '2022-12-30');

// Edit task
taskManager.editTaskTitle(2, 'Updated Task 2 Title');
taskManager.editTaskDueDate(2, '2022-12-24');

// Complete task
taskManager.completeTask(1);

// Display all tasks
const allTasks = taskManager.getAllTasks();
console.log('All Tasks:');
console.log(allTasks);

// Display completed tasks
const completedTasks = taskManager.getTasksByStatus(true);
console.log('Completed Tasks:');
console.log(completedTasks);

// Delete task
taskManager.deleteTask(3);

// Display remaining tasks
const remainingTasks = taskManager.getAllTasks();
console.log('Remaining Tasks:');
console.log(remainingTasks);

// Output:
// All Tasks:
// [
//   Task { id: 1, title: 'Task 1', description: 'Description 1', dueDate: '2022-12-31', completed: true },
//   Task { id: 2, title: 'Updated Task 2 Title', description: 'Description 2', dueDate: '2022-12-24', completed: false }
// ]
// Completed Tasks:
// [
//   Task { id: 1, title: 'Task 1', description: 'Description 1', dueDate: '2022-12-31', completed: true }
// ]
// Remaining Tasks:
// [
//   Task { id: 2, title: 'Updated Task 2 Title', description: 'Description 2', dueDate: '2022-12-24', completed: false }
// ]