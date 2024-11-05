let calculation = localStorage.getItem('calculation');

writeCalculation()

function updateCalculation (button){
  calculation = calculation += `${button}`
  writeCalculation()
}

function writeCalculation () {
  document.querySelector('.calc-value').innerHTML = calculation 
}

function equalsTo () {
  calculation = eval(calculation);
  localStorage.setItem('calculation', calculation);
  writeCalculation()
}
 
function clearButton () {
  calculation = ' ';
  localStorage.setItem('calculation', calculation);
  writeCalculation()
}

function deleteButton(){
  string1 = document.querySelector('.calc-value').innerHTML
  let length = string1.length
  let newstring = string1.slice(0, length-1)
  calculation = newstring
  writeCalculation()
}




