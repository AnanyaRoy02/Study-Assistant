
let notes = JSON.parse(localStorage.getItem("notes")) || [];


const noteTitle = document.getElementById("noteTitle");
const noteSubject = document.getElementById("noteSubject");
const noteContent = document.getElementById("noteContent");

const saveNoteBtn = document.getElementById("saveNoteBtn");
const notesGrid = document.getElementById("notesGrid");


// SAVE NOTE

saveNoteBtn.addEventListener("click", function () {

    const title = noteTitle.value.trim();
    const subject = noteSubject.value;
    const content = noteContent.value.trim();


    if (title === "" || content === "") {

        alert("Please enter both title and note.");

        return;

    }


    const newNote = {

        id: Date.now(),

        title: title,

        subject: subject,

        content: content,

        date: new Date().toLocaleDateString()

    };


    notes.push(newNote);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );


    noteTitle.value = "";
    noteContent.value = "";

    displayNotes();

});


// DISPLAY NOTES

function displayNotes() {

    if (notes.length === 0) {

        notesGrid.innerHTML = `
            <p class="empty-message">
                No notes created yet.
            </p>
        `;

        return;
    }


    notesGrid.innerHTML = notes.map(note => `

        <div class="note-card">

            <div class="note-header">

                <div class="note-icon">
                    <i class="ri-sticky-note-line"></i>
                </div>

                <button
                    class="delete-button"
                    onclick="deleteNote(${note.id})">

                    <i class="ri-delete-bin-line"></i>

                </button>

            </div>


            <span class="note-subject">
                ${note.subject}
            </span>


            <h3>
                ${note.title}
            </h3>


            <p>
                ${note.content}
            </p>


            <small>
                ${note.date}
            </small>

        </div>

    `).join("");

}


// DELETE NOTE

function deleteNote(id) {

    notes = notes.filter(note => note.id !== id);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    displayNotes();

}


displayNotes();

