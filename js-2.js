const addDiv = document.getElementById('write-down');

addDiv.addEventListener('click', () => {
  const textForDiv = document.getElementById('input-form');
  const newDiv = document.createElement('div');

  newDiv.classList.add('new-div');
  newDiv.innerHTML = textForDiv.value;

  newDiv.addEventListener('click', () => {
    newDiv.remove();
  })

  const boardForDiv = document.getElementsByClassName('board')[0];
  boardForDiv.append(newDiv);
})