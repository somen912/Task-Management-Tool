let keyControl = document.querySelector(".task-bar input");
let list = document.querySelector(".unorder-list");
let saveButton = document.querySelector(".tool-bar i");
let enterButton = document.querySelector(".task-bar button");

const addNote = document.querySelector(".header-section button");



keyControl.addEventListener("keyup",(event)=>{if(event.key=="Enter"){addToDo(keyControl.value); keyControl.value="";}});

enterButton.addEventListener("click",()=>{addToDo(keyControl.value);keyControl.value="";})

addNote.addEventListener("click",()=>{console.log("Add Note Button clicked");addnoteFunction();})



saveButton.addEventListener("click",()=>{
    let myArray = [];
    let taskList = document.querySelectorAll(".unorder-list li");
    taskList.forEach((element)=>{myArray.push(element.textContent)});
    console.log(myArray);
    localStorage.setItem("work-task",JSON.stringify(myArray));
    alert("Task Saved");
})




const addToDo = (item) =>{const itemList = document.createElement("li");
                          itemList.innerHTML=`${item}<i class="fa-solid fa-trash"></i>`;
                          itemList.querySelector("i").addEventListener("click",()=>{itemList.remove()})
                          list.appendChild(itemList);}


// to recall saved data
function getTask(){
                          const pending = JSON.parse(localStorage.getItem("work-task"));
                          console.log(pending);
                          pending.forEach((element)=>{addToDo(element);})
                                            }
// calling data recall function
getTask();

// date time function
const printDate = () =>{
  let now = new Date()
  document.querySelector(".date-time h2").innerText = now;
}

printDate();


const addnoteFunction = (text = "") =>{
  const note = document.createElement("div");
  note.classList.add("note-pad");
  note.innerHTML = `<div class="notepad-toolbar">
    <i class="fa-solid fa-floppy-disk save"></i>
    <i class="fa-solid fa-trash delete"></i>
  </div>
  <div class="text-area">
   <textarea class="text-box">${text}</textarea>
  </div> `;

  document.querySelector(".notepad-section").appendChild(note);
  note.querySelector(".notepad-toolbar .delete").addEventListener("click",()=>{console.log("Delete Clicked");note.remove();})
  note.querySelector(".notepad-toolbar .save").addEventListener("click",()=>{console.log("Save Clicked");saveNotes(); alert("Notes saved");})
}


const saveNotes = () =>{
  const notes = document.querySelectorAll(".note-pad textarea")
  let myArray = [];
  notes.forEach((note) => {myArray.push(`${note.value}`)});
  console.log(myArray);
  localStorage.setItem("work-notes", JSON.stringify(myArray));
}


const getlocalData = () => {
  const lsnotes = JSON.parse(localStorage.getItem("work-notes"));
  console.log(lsnotes);
  lsnotes.forEach((notes) => { addnoteFunction(notes);
  });
}

getlocalData();
