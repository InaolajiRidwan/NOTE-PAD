
var button = document.getElementById('btn');
var notesContainer = document.getElementById("notes-container");


button.onclick = function() {
    var note = document.createElement("div");
    note.className = "note";

    var pTag = document.createElement("p");
    pTag.setAttribute("contenteditable", "true");
    pTag.id = "ptagedit";


    var image = document.createElement("img");
    
 
  image.src = "trash-can-solid.svg";
  image.id = "imageedit";
  pTag.appendChild(image);
  notesContainer.appendChild(pTag);
  

  image.onclick = function () {
    pTag.remove();
  };
}















