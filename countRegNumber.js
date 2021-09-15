module.exports = function countAllPaarl(regNo) {
  
    var number = regNo.split(',');
    let count = 0;
    var regNo = []; 
    for (var i=0;i<number.length;i++){
      if (number[i].includes('CJ') === true){
        count++;
        regNo.push(number[i].trim());
     
      }
    }
  
   return count;
}