const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');
// 2 jam 44-rd rope
const notes = [{
      title: 'grel blok masivi  masin',
      completed: false,
},
{
      title: 'patmel teorian objeci',
      completed: true,
}
];

function render() {
      listElement.innerHTML = '';
      if (notes.length === 0) {
            listElement.innerHTML = '<p>no elements</p>'
      }
      for (let i = 0; i < notes.length; i++) {
            listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
      }
}

render()

createBtn.onclick = function () {
      if (inputElement.value.length === 0) {
            return
      }

      const newNote = {
            title: inputElement.value,
            completed: false,
      }
      notes.push(newNote)
      render()
      inputElement.value = '';
}

listElement.onclick = function (event) {
      if (event.target.dataset.index) {
            const index = Number(event.target.dataset.index)
            const type = event.target.dataset.type

            if (type === 'toggle') {
                  notes[index].completed = !notes[index].completed
            } else if (type === 'remuve') {
                  notes.splice(index, 1)
            }
            render()
      }
}
function getNoteTemplate(note, index) {
      return `
      <li class="list-grup-item" id="list-grup">
          <span class="${note.completed ? 'changeButton' : ''}">${note.title}</span>
          <span class="BtnSpan">
               <button class="btnSpan1 ${note.completed ? 'warning' : 'btnSpan1'}" data-index="${index}" data-type="toggle">v</button>
               <button class="btnSpan2" data-index="${index}" data-type="remuve">X</button>
         </span>
      </li>`

}
