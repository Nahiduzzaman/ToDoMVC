(function(window){

'use strict'

console.log(task);

window.createTask = function(){
	task = {
		created_at: new Date(),
		taskname: document.getElementById("taskname").value,
		description: document.getElementById("description").value,
		done: false
	}

	if(task.taskname == ""){
	   	alert("Please enter task name!");
	}
	else if(task.description == ""){
	   	alert("Please enter task description!")
	}
	else{
		todoData.push(task);
		console.log('todoData',todoData);
		localStorage.setItem("todoData", JSON.stringify(todoData));window
	}

	modal.style.display = "none";
	flterAndRender('all')
}

window.searchTodo = function(text){
    document.getElementById("main").innerHTML="";	
	console.log('searchText',text);
	console.log('todoData in searchTodo',todoData);
    var forsearch = todoData;
	for(var i = 0; i < forsearch.length; i++){
		forsearch[i].s_id = i;
	}
	function filterItems(query) {
	    return forsearch.filter(function(el) {
	     return el.taskname.toLowerCase().indexOf(query.toLowerCase()) > -1 || el.description.toLowerCase().indexOf(query.toLowerCase()) > -1 ;
	    })
	}
	var searchedData = filterItems(text);
	console.log('searchedData',searchedData)
	for(var j=0;j < searchedData.length;j++){
		createlist(searchedData[j].s_id);
	}
}

function done(x, _this, task) {
  if (_this.checked) {
  	todoData[task].done = true;
  	x.getElementsByTagName("B")[0].style.textDecoration="line-through";
    x.style.backgroundColor = '#bfbfbf';
  } else  {
  	todoData[task].done = false;
    x.style = '';
    x.getElementsByTagName("B")[0].style.textDecoration="";
  }
  //localStorage.setItem("todos", JSON.stringify(todoData));
  localStorage.setItem("todoData", JSON.stringify(todoData));
  console.log('TodoData after done or undone',todoData);
}

window.remove = function(idx){
	console.log('idx',idx);
	todoData.splice(idx, 1);
	var idtodelete = 'list'+idx;
	document.getElementById(idtodelete).remove();
	localStorage.setItem("todoData", JSON.stringify(todoData));
}

var index;
window.editOnClick = function(id){
	console.log('edit_id',id);
	console.log('todoData in edit',todoData)
	console.log('taskname',todoData[id].taskname );
	console.log('taskDesc',todoData[id].description );
	modal.style.display = "block";
	modal.getElementsByTagName("INPUT")[0].value = todoData[id].taskname;
	modal.getElementsByTagName("TEXTAREA")[0].value = todoData[id].description;
    modal.getElementsByTagName("SPAN")[0].style.display = 'none'; //save
    modal.getElementsByTagName("SPAN")[1].style.display = 'unset'; //update
	index = id;
	console.log(index);	
}

window.update = function(){
	console.log(index);
	todoData[index].taskname = modal.getElementsByTagName("INPUT")[0].value;
	todoData[index].description = modal.getElementsByTagName("TEXTAREA")[0].value;
	localStorage.setItem("todoData", JSON.stringify(todoData));
	console.log(JSON.parse(localStorage.getItem("todoData")));
	modal.style.display = "none";
	window.location.reload();
}


window.cancel = function(){
	modal.style.display = "none";
}



})(window)