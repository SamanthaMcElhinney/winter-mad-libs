// buttons:
var buttonWrite = document.querySelector('.write-button')
var buttonClear = document.querySelector('.clear-story-button')

//form
var formHolder = document.querySelector('.form')
var inputFormNoun1 = document.querySelector("#noun1");
var inputFormPlace1 = document.querySelector("#place1");
var inputFormNum1 = document.querySelector("#num1");
var inputFormNoun2 = document.querySelector("#noun2");
var inputFormVerb1 = document.querySelector("#verb1");
var inputFormClothing1 = document.querySelector("#clothing1");
var inputFormClothing2 = document.querySelector("#clothing2");
var inputFormBeverage1 = document.querySelector("#beverage1");
var inputFormFood1 = document.querySelector("#food1");

//story
var storyHolder = document.querySelector('.story')
var storyNoun1 = document.querySelector('noun1Text');
var storyPlace1 = document.querySelector("#place1Text");
var storyNum1 = document.querySelector("#num1Text");
var storyNoun2 = document.querySelector("#noun2Text");
var storyVerb1 = document.querySelector("#verb1Text");
var storyClothing1 = document.querySelector("#clothing1Text");
var storyClothing2 = document.querySelector("#clothing2Text");
var storyBeverage1 = document.querySelector("#beverage1Text");
var storyFood1 = document.querySelector("#food1Text");
var storyArray = [];

// eventListeners:

buttonWrite.addEventListener('click', writeStory)
buttonClear.addEventListener("click", clearStory);

//create functions
function writeStory() {
  var dataModel = gatherDataModel();
  alertNoInput(dataModel);
  completeStory(dataModel);
}

function clearStory() {
  showInputForm();
  hideStory();
  clearInputForm();
}

function hideInputForm() {
  formHolder.classList.add("hidden");
}

function showInputForm() {
  formHolder.classList.remove("hidden");
}

function showStory() {
  storyHolder.classList.remove("hidden");
}

function hideStory() {
  storyHolder.classList.add("hidden");
}

function gatherDataModel() {
  var inputData = {
    inputNoun1: inputFormNoun1.value,
    inputPlace1: inputFormPlace1.value,
    inputNum1: inputFormNum1.value,
    inputNoun2: inputFormNoun2.value,
    inputVerb1: inputFormVerb1.value,
    inputClothing1: inputFormClothing1.value,
    inputClothing2: inputFormClothing2.value,
    inputBeverage1: inputFormBeverage1.value,
    inputFood1: inputFormFood1.value,
  };
  return inputData;
}

function completeStory(dataModel) {
  storyNoun1.innerText = `${dataModel.inputNoun1}`;
  storyPlace1.innerText = `${dataModel.inputPlace1}`;
  storyNum1.innerText = `${dataModel.inputNum1}`;
  storyNoun2.innerText = `${dataModel.inputNoun2}`;
  storyVerb1.innerText = `${dataModel.inputVerb1}`;
  storyClothing1.innerText = `${dataModel.inputClothing1}`;
  storyClothing2.innerText = `${dataModel.inputClothing2}`;
  storyBeverage1.innerText = `${dataModel.inputBeverage1}`;
  storyFood1.innerText = `${dataModel.inputFood1}`;
}
function saveStories(dataModel) {
  storyArray.push(dataModel);
}

function alertNoInput(dataModel) {
  if (
    `${dataModel.inputNoun1}` === "" ||
    `${dataModel.inputPlace1}` === "" ||
    `${dataModel.inputnum1}` === "" ||
    `${dataModel.inputNoun2}` === "" ||
    `${dataModel.inputVerb1}` === "" ||
    `${dataModel.inputClothing1}` === "" ||
    `${dataModel.inputClothing21}` === "" ||
    `${dataModel.inputBeverage1}` === "" ||
    `${dataModel.inputFood1}` === ""
  ) {
    return alert("Enter Value Please");
  } else {
    hideInputForm();
    showStory();
    saveStories(dataModel);
  }
}

function clearInputForm() {
  inputFormNoun1.value = "";
  inputFormPlace1.value = "";
  inputFormNum1.value = "";
  inputFormNoun2.value = "";
  inputFormVerb1.value = "";
  inputFormClothing1.value = "";
  inputFormClothing2.value = "";
  inputFormBeverage1.value = "";
  inputFormFood1.value = "";
}


