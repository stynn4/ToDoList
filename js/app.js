/* Obiekt pojedynczego zadania */

let Task = function() {
  this.topic = '';
  this.priority = 0;
  this.deadline = 0;
  this.description = '';
  this.done = false;
};


/* lista obiektów zadań */

let tasksList = [];


/* Funkcje */

function deadlineCounter(futureDate) {

}


/* Funkcja tworzaca nowe zdanie. */
//  Wywołanie - nacisniecie przycisku 'dodaj' na formularz nowego zadania.
//  Działanie - funkcja pobiera element formularza i jego pola. Czyta wartości pól
//  i sprawdza czy wymagane z nich sa wypełnione (temat zadania)
//  i czy maja poprawna formę (data). Za pomoca funkcji deadLineCounter wylicza liczbe dni
//  do końca wykonania zadania.
//  Jesli dane zostały poprawnie wprowadzone to funkcja tworzy obiekt zadania, wpisuje
//  do niego dane z pól formularza i dodaje obiekt do tablicy obiektów.
//  nastepnie składuje tablicę obiektów w local storage.
//  Funkcja tworzy element listy obiektów przekazuje im nowo wprawadzone dane i dodaje
//  element do listy zadań na stronie.
//  Uwagi - na razie w uproszczonej formie tylko dla tematu zadania
function createNewTask(e) {
  e.preventDefault();

  let taskForm = document.querySelector('#newTaskForm');
  let taskTopicInput = document.querySelector('.newTask #topic');
  let tasksListUl = document.querySelector('.tasks ul');
  // let deadlineInput = document.querySelector('.newTask #deadline');
  // let priority = document.querySelector('.newTask #priority input[checked]').value;
  // let description = document.querySelector('.newTask #description').value;

    /* Walidacja */
  if(taskTopicInput.value === '') {
    let allert = document.createElement('div');
    allert.classList.add('allert');
    allert.textContent = 'Wprowadź temat zadania';
    taskForm.insertBefore(allert, taskTopicInput);
    taskTopicInput.classList.add('redAllert');
  } else {

    /* Tworzenie obiektu nowego zadania i zapisywanie go w tablicy, a tablice w local storage */
    let newTask = new Task();
    newTask.topic = taskTopicInput.value;
    tasksList.push(newTask);
    localStorage.setItem(taskslist, JSON.stringify(tasksList));

    /* Tworzenie elementów listy z danymi nowo utworzonego zadania */
    let newTaskLi = document.createElement('li');
    let topicSpan = document.createElement('span');
    let deleteTaskA = document.createElement('a');
    let deleteIconI = document.createElement('i');
    newTaskLi.classList.add('task');
    topicSpan.classList.add('topic');
    deleteTaskA.classList.add('deleteTask');
    deleteIconI.classList.add('deleteIcon');
    topicSpan.textContent = newTask.topic;
    deleteTaskA.appendChild(deleteIconI);
    newTaskLi.appendChild(topicSpan);
    newTaskLi.appendChild(deleteTaskA);
    tasksListUl.appendChild(newTaskLi);
  }
}