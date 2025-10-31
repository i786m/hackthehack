// Please do not change the name of this function
function calculateDivisors(num) {
  let divisorTotal = 0
  for(let i = num - 1 ; i>1 ; i--){
    if(i%3===0||i%5===0) divisorTotal += i
  }
    
  
  return num<3 
  ? 0 
  : divisorTotal
}

module.exports = calculateDivisors