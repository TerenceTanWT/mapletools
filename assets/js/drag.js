function allowDrop(e){
  e.preventDefault();
}

function drag(e){
  e.dataTransfer.setData("Dragged", e.target.id);
}

/*
function drop(e){
    e.preventDefault();
    var id = e.dataTransfer.getData("Dragged");
    e.target.appendChild(document.getElementById(id));
}
*/

/*
function drop(e){
  if(e.target.className=='dropped' || e.target.className=='dragger')
  {
    e.preventDefault();
    var id = e.dataTransfer.getData("Dragged");
    e.target.appendChild(document.getElementById(id));
  }
}
*/

function drop(e){
  if(e.target.id=='dropped' || e.target.id=='dragger')
  {
    e.preventDefault();
    var id = e.dataTransfer.getData("Dragged");
    e.target.appendChild(document.getElementById(id));
  }
}