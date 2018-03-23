let Task = function() {
  this.topic = '';
  this.priority = 0;
  this.deadline = 0;
  this.description = '';
  this.done = false;
};

let tasks = [];

function deadlineCounter() {

}

function createNewTask() {
  let newTask = new Task();
  let topicInput = document.querySelector('.newTask #topic');
  let deadlineInput = document.querySelector('.newTask #deadline');
  let priority = document.querySelector('.newTask #priority input[checked]').value;
  let description = document.querySelector('.newTask #description').value;
  /* Walidacja */
  if(title === '') {

  }
}