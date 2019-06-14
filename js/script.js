var display;
var plus;
var minus;
var inputval;
var displayval;
var displayint;

var display = document.getElementById('display');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var input = document.getElementById('input')

plus.addEventListener("click", function(e){
    inputval = input.value;
    displayint = display.textContent;
    displayval = Number(inputval) + Number(displayint);
    display.textContent = displayval;
})

minus.addEventListener("click", function(e){
    inputval = input.value;
    displayint = display.textContent;
    displayval = Number(displayint) - Number(inputval);
    display.textContent = displayval;
})