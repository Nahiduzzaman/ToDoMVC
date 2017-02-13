(function(window){

'use strict'

var data = [];
	
if(JSON.parse(localStorage.getItem("todoData")) == null){
	var todoData = [];
}
else{
	var todoData = JSON.parse(localStorage.getItem("todoData"));
}


var task = {
	created_at: null,
	taskname: null,
	description: null,
	done: false
}

window.task = task;
window.data = [];
window.todoData = todoData;

})(window)