module.exports = function totalPhoneBill(string) {


    const items = string.split(',');
    let totalCost = 0;
    for (var i=0; i<items.length; i++) {
      const item = items[i].trim();
      if (item == 'call') {
        totalCost += 2.75;
      }
      else if(item == 'sms') {
        totalCost += 0.65;
      }
  }
    
    return 'R'+ totalCost.toFixed(2);
  
  }