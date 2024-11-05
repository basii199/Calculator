let calculation = localStorage.getItem('calculation') || 0;
let calcValue = document.querySelector('.calc-value')
let value1
let arith
let value2

writeCalculation()

function updateCalculation (button){
  if(calculation == 0){
    calculation = `${button}`
    writeCalculation()
  } else{
    calculation = calculation += `${button}`
    writeCalculation()
  }
}

function performArithmetic (button){
  value1 = calcValue.innerHTML
  arith = button
  calcValue.innerHTML = ''
  calculation = 0
}

function writeCalculation () {
  calcValue.innerHTML = calculation 
}

function equalsTo () {
  value2 = calcValue.innerHTML
  let test = `${value1} ${arith} ${value2}`
  calculation = eval(test);
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

let bodyDOM = document.querySelector('body')
  bodyDOM.addEventListener('keydown', (event)=>{
    let e = event.key
    
    if(e >= 0 || e == '.'){
      updateCalculation(event.key)
    }else if (e == '+'||e == '-'|| e == '*'||e== '/' ){
      performArithmetic(e)
    }else if (e=='='){
      equalsTo()
    }else if(e=='Backspace'){
      deleteButton()
    } else if (e=='Escape'){
      clearButton()
    }
  })

  


