(function(window){

//'use strict'

window.flterAndRender = function(status) {
	console.log(status);
	document.getElementById("main").innerHTML="";

    if(status == 'done'){
	    for(var i = 0; i < todoData.length; i++) {
	    	if(todoData[i].done == true){
	    		createlist(i);
	    	}
	    }    
	}
	else if(status == 'pending'){
	    for(var i = 0; i < todoData.length; i++) {
	    	if(todoData[i].done == false){
	    		createlist(i);
	    	}
	    }
	}	
	else{
    	data = todoData;
    	sortbytitle(data);
    	for(var i = 0; i < data.length; i++) {
	    	createlist(i);	    	
	    }
	}
	
}

function createlist(i){
	var list = document.createElement("li");
	list.id = "list"+i;

  	var outerdiv = document.createElement("div");
  	outerdiv.style.display = "inline";
  	outerdiv.innerHTML = '<div class="taskimg">'+
           					'<img class="img_resize" tabindex="1" src="css/images/todo.png" alt="todo_logo">'+
        				  '</div>';

  	var card = document.createElement("div");
	card.className = "card";
	card.id = "task"+[i];

	var container = document.createElement("div");
	container.className = "container";
	container.innerHTML = '<h4><b>'+data[i].taskname+'</b><input '+
						  'type="checkbox" onChange="done(task'+[i]+', this,'+[i]+')" style="float: right;">'+
						  '<span onclick="remove('+[i]+')" style="float:right;cursor:pointer;margin-right: 10px">&times;</span>'+
						  '<a id="editBtn'+[i]+'" onclick="editOnClick('+[i]+')" style="float:right;cursor:pointer;margin-right: 10px">Edit</a></h4>'+ 
                          '<p>'+data[i].description+'</p>';

    if(data[i].done == true){
		card.style.backgroundColor = '#bfbfbf';
		container.getElementsByTagName("B")[0].style.textDecoration="line-through";
	}
	
	outerdiv.appendChild(card);
	card.appendChild(container);
	list.appendChild(outerdiv);

	console.log('list',list);
	document.getElementById("main").appendChild(list);
}

function sortbytitle(data){
	data.sort(function(a, b) {
	  var titleA = a.taskname.toUpperCase(); // ignore upper and lowercase
	  var titleB = b.taskname.toUpperCase(); // ignore upper and lowercase
	  if (titleA < titleB) {
	    return -1;
	  }
	  if (titleA > titleB) {
	    return 1;
	  }
	  return 0;
	});
    return data;
}

})(window)