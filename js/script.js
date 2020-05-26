console.log('rhz');

const products = [
  {
      "id": 1,
      "name": "Milk",
      "cost": 120
  },
  {
      "id": 2,
      "name": "Potato",
      "cost": 63
  },
  {
      "id": 3,
      "name": "Chocolate",
      "cost": 270
  },
  {
      "id": 4,
      "name": "Coffee",
      "cost": 167
  },
  {
      "id": 5,
      "name": "Cheese",
      "cost": 399
  },
  {
      "id": 6,
      "name": "Sausage",
      "cost": 320
  }
];

function getById(products, id) {
  var product = products.find(item => item.id == id);
  //if (product == undefined) return 'Нет продукта с таким id';
  return product;
}
/*
function getById(products, id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
        return products[i];
    }
  }

*/

function sortedDescending (products) {
	function sortProductsDescending (a, b) {
		return b.cost - a.cost;
	}
	
	return products.sort(sortProductsDescending);
}

function sortedAscending (products) {
	function sortProductsAscending (a, b) {
		return a.cost - b.cost;
	}

	return products.sort(sortProductsAscending);
}


function renameById(products, id, newName) {
  products.find(item => item.id == id).name = newName;
	return products; 
}
/*function renameById(products, id, newName) {
  for (var i = 0;i < products.length; i++ ) {
    if (products[i].id == id) {
      products[i].name = newName;
    }
  }
	return products; 
}*/

function deleteById(products, id) {
  var newProducts = products.filter(item => item.id !== id);
  return newProducts;
}
//обратная логика! не нарезать массив, а собрать в новый массив все элементы id которых не совпадает с входящим значением
/*function deleteById(products, id) { 
  for (var i = 0; i < products.length; i++) { 
    if (products[i].id == id) { 
      var newProducts = products.slice(); 
      newProducts.splice(i, 1); 
      return newProducts; 
    }
  }
}*/

function searchAllParameters(products, search) {
	var searchProducts = [];
	searchProducts = products.filter( function(product) {
    var productValue = Object.values(product);
    if ( productValue.includes(search) ) return product;
  });
  return searchProducts;
}
/*function searchAllParameters(products, search) {
	var searchProducts = [];
	for (var i = 0; i < products.length; i++) {
		for (var key in products[i]) {
			if (products[i][key] == search) {
				searchProducts.push(products[i]);
			}
		}
	}
	return searchProducts;
}*/

function getMaxCost(products) {
  var productMaxCost = products.reduce(function (accumulator, currentValue) {
	  if (currentValue.cost > accumulator.cost) {
		  accumulator = currentValue;
    }
	  return accumulator;
  }, products[0]);
  return productMaxCost;
}
/*function getMaxCost(products) {
	var productMaxCost;
	var maxCost = 0;
	
	for (var i = 0; i < products.length; i++) {
		if (maxCost < products[i].cost) {
			maxCost = products[i].cost;
			productMaxCost = products[i];
		}
	}
	return productMaxCost;
}*/

function getMinCost(products) {
	var productMinCostValue = products[0].cost;
  var productMinCost = products.reduce(function (accumulator, currentValue) {
	  if (currentValue.cost < productMinCostValue) {
		  productMinCostValue = currentValue.cost;
		  accumulator = currentValue;
    }
	  return accumulator;
  }, products[0]);
  return productMinCost;
}
/*function getMinCost(products) {
	var productMinCost;
	var minCost = products[0].cost;
	
	for (var i = 0; i < products.length; i++) {
		if (minCost > products[i].cost) {
			minCost = products[i].cost;
			productMinCost = products[i];
		}
	}
	return productMinCost;
}*/


console.log( getById(products, 2) );
console.log( sortedDescending(products) ); //нужно переделать, чтобы объект клонировался
console.log( sortedAscending(products) ); //нужно переделать, чтобы объект клонировался
console.log( renameById(products, 4, 'noCoffee') );
console.log( deleteById(products, 4) );
console.log( searchAllParameters(products, 'Cheese') );
console.log( getMaxCost(products) );
console.log( getMinCost(products) );