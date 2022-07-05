const addDiv = document.getElementById('write-down');
const textForDiv = document.getElementById('input-form');

addDiv.addEventListener('click', () => {

  if (textForDiv.value.length === 0) {
    return;
  }
  const newDiv = document.createElement('div');

  newDiv.classList.add('new-div');
  newDiv.innerHTML = textForDiv.value;
  textForDiv.value = '';

  newDiv.addEventListener('click', () => {
    newDiv.remove();
  })

  const boardForDiv = document.getElementsByClassName('board')[0];
  boardForDiv.append(newDiv);
})

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  textForDiv.value = '';
})