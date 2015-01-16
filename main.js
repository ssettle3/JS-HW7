
// **************************************** 1. How to calculate the average price of all items. *********************************************//
// ============================================================================================================================================

// I want to pull all the prices in all objects down and list them out.
// I want to add all the prices together to one big lump sump.
// Next I want to take that sum and divide it by the total number of items.


var priceArray = items.map(function(itemPrice, i, a){
	return itemPrice.price;
});

var priceSum = priceArray.reduce(function(current, next){
	return current + next;
});

var priceAvg = (priceSum / items.length);


// This yeilds a value of 23.625999999999998. So.....

var Avg = priceAvg.toFixed(2);

console.log("1.");
console.log("The average price is " + Avg);
console.log("");



//************************** 2. How to get an array of items that cost between $14.00 and $18.00 USD. ************************* //
//================================================================================================================================


var itemArray = items.filter(function(item){
  return item.price >= 14  && item.price <= 18;
});

var nameArray = itemArray.map(function(name){
	return  name.title;
});

console.log("2.");
console.log("Items that cost between $14.00 USD and $18.00 USD: " + nameArray);
console.log("");





//*********************** 3. How to find the item with a "GBP" currency code and print its name and price. ***********************//
//==================================================================================================================================
// Set up a filter to search for the currency_code GPB

var moneyArray = items.filter(function(money){
	return money.currency_code === "GBP";
});

var nameArray = moneyArray.map(function(name){
	return name.title;
});

var priceArray = moneyArray.map(function(money){
	return money.price;
});

console.log("3.");
console.log(nameArray + " costs " + "£" + priceArray);
console.log("");



// ****************************** 4. How to find which items are made of wood. **************************************************//
// ===============================================================================================================================

var woodArray = items.filter(function(wood){
		return wood.materials.indexOf("wood") > -1;

});

console.log("4.");
console.log(woodArray[0].title + " is made of wood.");
console.log(woodArray[1].title + " is made of wood.");
console.log(woodArray[2].title + " is made of wood.");
console.log(woodArray[3].title + " is made of wood.");
console.log(woodArray[4].title + " is made of wood.");
console.log("");




// ******************************* 5. How to find which items are made of eight or more materials. *****************************//
// ===============================================================================================================================

var matArray = items.filter(function(mat){
	if(mat.materials > mat.materials[7]){
		return mat.materials 
	}
});

console.log("5.");
console.log(matArray[0].title + " has " + matArray[0].materials.length + " materials and they are; " + matArray[0].materials); 
console.log(matArray[1].title + " has " + matArray[1].materials.length + " materials and they are; " + matArray[1].materials); 
console.log("");





// *********************************** 6. How to calculate how many items were made by their sellers ***************************//
// ===============================================================================================================================
// First thing is to figure a function to filter out what items were made by their sellers.

var madeArrary = items.filter(function(made){
	return made.who_made === "i_did";
});

console.log("6.");
console.log(madeArrary.length + " items were made by their sellers.");
console.log("");

