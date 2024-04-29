const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box'); // this will select all the ntoes// 

// check if any notes/date in local storage, if there is, then display that particular data as a note 
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();
// store notes in browser so it wont be gone when refreshed 
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

// For above fucntion, whenever we click on the button (btn)
// it will execute the function 
// 1. create variable called inputBox, and will create one element (p) and store it in inputBox
// 2. create another element (img), and store as img 
// 3, will create one class name called input-box in p element (created in step 1) 
// 4. in p element (creted in step 1), it will create one attribute called contenteditable 
// 5. then in img element (step 2), add images/delete.png 
// 6. display classes (inputBox) and (img) in div notes-container in index.html 


// delete function 

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {          // update storage when added things in p tag // 
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak"); // make pressing Enter become adding to next line // 
        event.preventDefault();
        updateStorage();
    }
}); 
