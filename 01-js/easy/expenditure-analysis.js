/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  list = [];
  for (let transaction of transactions) {
    let category = transaction.category;
    let price = transaction.price;
    let flag = false;
    for (let obj of list) {
      if (obj["category"] == category) {
        obj["totalSpent"] += price;
        flag = true;
        break;
      }
    }
    if (!flag) {
      let obj = {};
      obj["category"] = category;
      obj["totalSpent"] = price;
      list.push(obj);
    }
  }
  return list;
}

module.exports = calculateTotalSpentByCategory;
