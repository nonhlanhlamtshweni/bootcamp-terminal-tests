module.exports = function findItemsOver(list, list1) {
 
    const items1 = [];
    for (var i in list){
      if (list[i].qty > list1)
        items1.push(list[i])
    }
    return items1;
  }