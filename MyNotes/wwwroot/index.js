class Controller {
    readMode() {
        this.mode = 0;
        this.turnOff(saveButton, updateButton, cancelButton, deleteButton, noteText);
        this.turnOn(createButton, editButton);
        document.getElementsByName('readButton').forEach(elem => {
            this.turnOn(elem);
        });
        clear(noteText, noteDate);
    }

    createMode() {
        this.turnOff(createButton, editButton, updateButton, deleteButton);
        this.turnOn(saveButton, cancelButton, noteText);
        document.getElementsByName('readButton').forEach(elem => {
            this.turnOff(elem);
        });
        elem => this.turnOff(elem);
        clear(noteText, noteDate);
    }

    editMode() {
        this.turnOff(createButton, saveButton, editButton, noteText);
        this.turnOn(updateButton, cancelButton, deleteButton, noteText);
        document.getElementsByName('readButton').forEach(elem => {
            this.turnOff(elem);
        }); 

    }

    turnOff() {
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].setAttribute('disabled', '');
        }
    }

    turnOn() {
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].removeAttribute('disabled');
        }
    }
}

async function loadNotes() {
    var response = await fetch('https://localhost:44338/Api/Note', {
        method: 'GET'
    });

    if (response.ok) {
        var notes = await response.json();
        renderTable(notes);
    } else {
        feedback('Ошибка HTTP: ' + response.status);
    }
}

function create() {
    controller.createMode();
    clear(noteDate, noteText, feedbackArea)
}

function edit() {
    controller.editMode();
    clear(feedbackArea)
}

function cancel() {
    controller.readMode();
    clear(noteDate, noteText, feedbackArea)
}

async function read(id) {
    var response = await fetch('https://localhost:44338/Api/Note/' + id, {
        method: 'GET'
    });

    if (response.ok) {
        var note = await response.json();
        noteText.value = note.text;
        noteDate.value = note.date;
        noteId.value = note.noteId;
    }
    sendFeedback(response, '');
}

async function save() {
    var text = noteText.value;
    if (!text)
        return;
    const formData = new FormData();
    formData.append('text', text);

    var response = await fetch('https://localhost:44338/Api/Note', {
        method: 'POST',
        body: formData
    });

    controller.readMode();
    sendFeedback(response, 'The note was successfully created');
}

async function update() {
    var text = noteText.value;
    if (!text)
        return;
    var Id = noteId.value;
    const formData = new FormData();
    formData.append('text', text);

    var response = await fetch('https://localhost:44338/Api/Note/' + Id, {
        method: 'PUT',
        body: formData
    });

    controller.readMode();
    sendFeedback(response, 'The note was successfully updated');
}

async function del() {
    var Id = noteId.value;

    var response = await fetch('https://localhost:44338/Api/Note/' + Id, {
        method: 'DElETE',
    });

    controller.readMode();
    sendFeedback(response, 'The note was successfully deleted');
}

async function sendFeedback(response, OkAnswer, ErrorAnser = 'Ошибка HTTP: ' + response.status) {
    if (response.ok) {
        await loadNotes();
        feedback(OkAnswer)
    } else {
        feedback(ErrorAnser);
    }
}

function feedback(message) {
    feedbackArea.value = message;
}

function clear(){
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].value = '';
    }
}

function renderTable(notes) {
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    notes.forEach(noteInfo => {
        var tr = document.createElement('tr');
        //appendTd(noteInfo.noteId, tr);
        appendButton(noteInfo.noteId, tr)
        appendTd(noteInfo.date, tr);
        appendTd(noteInfo.text, tr);
        tableBody.appendChild(tr);
    });
}

function appendTd(data, tr) {
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(data || ''));
    tr.appendChild(td);
}

function appendButton(data, tr) {
    var button = document.createElement('button');
    button.value = data;
    button.setAttribute('onclick', 'read(value)');
    button.setAttribute('class', 'btn btn-success');
    button.setAttribute('name', 'readButton');
    tr.appendChild(button);
}

loadNotes();
let controller = new Controller();  
