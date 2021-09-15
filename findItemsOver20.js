module.exports = function findItemsOver20(list) {
    const items = [];
    for (var i=0; i<list.length;i++) {
      if (list[i].qty > 20)
        items.push(list[i])
    }
    return items;
  }