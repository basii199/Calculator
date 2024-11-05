let calculation = localStorage.getItem('calculation') || 0;
let calcValue = document.querySelector('.calc-value')

writeCalculation()

function updateCalculation (button){
  calculation = calculation += `${button}`
  writeCalculation()
}

function performArithmetic (button){
  //const value1 = 
}

function writeCalculation () {
  calcValue.innerHTML = calculation 
}

function equalsTo () {
  calculation = eval(calculation);
  localStorage.setItem('calculation', calculation);
  writeCalculation()
}
 
function clearButton () {
  calculation = '0';
  localStorage.setItem('calculation', calculation);
  writeCalculation()
}

function deleteButton(){
  string1 = calcValue.innerHTML
  let length = string1.length
  let newstring = string1.slice(0, length-1)
  calculation = newstring

  if (calcValue.innerHTML == 0){
    calculation = 0
  }
  writeCalculation()
}




