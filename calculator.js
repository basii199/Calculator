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
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  writeCalculation()
}
 
function clearButton () {
  calculation = ' ';
  localStorage.setItem('calculation', calculation);
  writeCalculation()
}



