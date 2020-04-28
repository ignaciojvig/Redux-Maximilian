const cloneDeep = require("lodash.clonedeep");

const pizzas = {
  margherita: {
    toppings: ["tomato sauce", "mozzarella cheese"],
    prices: {
      small: "5.00",
      medium: "6.00",
      large: "7.00",
    },
  },
  prosciutto: {
    toppings: ["tomato sauce", "mozzarella cheese", "ham"],
    prices: {
      small: "6.50",
      medium: "7.50",
      large: "8.50",
    },
  },
};

let pizzasCopy = cloneDeep(pizzas);

// modify a value in the copy of pizzas
pizzasCopy.margherita.prices.small = "5.50";

// log the copied object to the console
console.log(pizzasCopy.margherita.prices.small); // This will log 5.50, as expected

// log the source object to the console
console.log(pizzas.margherita.prices.small); // This will also log 5.50 instead of 5.00!!
