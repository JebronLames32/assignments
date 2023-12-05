/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
