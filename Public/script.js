const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
// Get references to the input fields and button
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const addNoteButton = document.getElementById('add-note');
const notesSection = document.querySelector('.notes');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

// Function to add a new note
function addNote() {
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();

    // Validate inputs
    if (!title || !content) {
        alert('Both title and content are required!');
        return;
    }

    // Create a new note element
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    const noteTitle = document.createElement('h3');
    noteTitle.textContent = title;

    const noteContent = document.createElement('p');
    noteContent.textContent = `Last edited: ${new Date().toLocaleString()}`;

    // Append title and content to the new note
    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);

    // Add the new note to the notes section
    notesSection.appendChild(noteDiv);

    // Clear input fields
    noteTitleInput.value = '';
    noteContentInput.value = '';
}

// Attach click event listener to the Add Note button
addNoteButton.addEventListener('click', addNote);