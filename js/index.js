let textInput = document.querySelector("#text");
let buttonNode = document.querySelector(`#button`);
let resultNode = document.querySelector(`#result`);
buttonNode.addEventListener(`click`, function () {
    resultNode.value = `Привет, ` + textInput.value;
})