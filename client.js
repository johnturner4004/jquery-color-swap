$(document).ready(onReady);

function onReady() {
  console.log('JQ');
  $('#generate').on('click', generateDiv);
  $('#target').on('click', '.yellowButton', makeYellow);
  $('#target').on('click', '.deleteButton', deleteDiv);
}

let count = 0;

function generateDiv() {
  console.log('click');
  count++
  $('#target').append(`
    <p class="count">${count}</p>
    <div class="color">
    <button class="yellowButton">Yellow</button>
    <button class="deleteButton">Delete</button>
    </div>
  `);
}

function makeYellow() {
  $(this).parent().addClass('yellow');
}

function deleteDiv() {
  $(this).parent().remove();
}