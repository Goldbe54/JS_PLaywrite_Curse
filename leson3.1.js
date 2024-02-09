function descendingOrder(n){
    orderArray = n.toString().split('').sort().reverse();
    
    return parseInt(orderArray);
  }

  console.log(descendingOrder(6123));
