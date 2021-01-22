// kilometerToMeter

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Wrong number!";
  }
  var meter = kilometer * 1000;
  return meter;
}
var baileyRoad = kilometerToMeter(5);
console.log(baileyRoad);

// budgetCalculator

function budgetCalculator([watch, phone, laptop]) {
  if (watch < 0) {
    return "Add a product";
  }
  if (phone < 0) {
    return "Add a product";
  }
  if (laptop < 0) {
    return "Add a product";
  }
  var watchPrice = watch * 50;
  var phonePrice = phone * 100;
  var laptopPrice = laptop * 500;
  var totalPrice = watchPrice + phonePrice + laptopPrice;
  return totalPrice;
}
var totalBudget = budgetCalculator([2, 3, 5]);
console.log(totalBudget);

// hotelCost

function hotelCost(days) {
  if (days <= 0) {
    return "Wrong number!";
  }
  if (days <= 10) {
    rent = days * 100;
  } else if (days <= 20) {
    var firstTenDays = 10 * 100;
    var remaining = days - 10;
    var secondTenDays = remaining * 80;
    rent = firstTenDays + secondTenDays;
  } else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remaining = days - 20;
    var afterTwentyDays = remaining * 50;
    rent = firstTenDays + secondTenDays + afterTwentyDays;
  }
  return rent;
}
var totalCost = hotelCost(22);
console.log(totalCost);

// megaFriend

function megaFriend(nameArray) {
  var biggestName = 0;
  var biggest;
  for (var i = 0; i < nameArray.length; i++) {
    if (nameArray[i].length > biggestName) {
      var biggestName = nameArray[i].length;
      biggest = nameArray[i];
    }
  }
  return biggest;
}
console.log(megaFriend(["Nahid", "Mariya", "Sumaiya", "Elma", "Humayra"]));
