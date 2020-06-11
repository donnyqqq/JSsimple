function run(){
  let value = document.getElementById('desc').value
  let arVal = value.split('')
  for(let i of arVal){
    if(i == '/'){
      arVal[arVal.indexOf('/')] = 'let '
    }if(i == '@'){
      arVal[arVal.indexOf('@')] = 'function '
    }
    console.log(i)
  }
  console.log(arVal)
  console.log(arVal.join(''))
  eval(arVal.join(''))
  
}