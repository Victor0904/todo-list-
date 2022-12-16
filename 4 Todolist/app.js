var task = document.getElementById('task');
var todo = document.getElementById('todo');
var add = document.getElementById('add');

add.onclick = function(){
  
  if(task.value !=""){

    var newP = document.createElement('p');

  }
  newP.innerHTML = task.value;

  newP.classList.add('newP');

  todo.appendChild(newP);

  task.value ="";

  newP.addEventListener('click', function(){
    newP.classList.add('p-click');
  });

  newP.addEventListener('dblclick', function () {
    todo.removeChild(newP);
  });
}