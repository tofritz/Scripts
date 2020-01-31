// get random integer between min and max (inclusive) //

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// round a value to a # of decimals //

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

// temperature conversions //

const ftoc = function(numFarenheight) {
  numCelsius = (numFarenheight - 32) * (5 / 9);
  return Math.round(numCelsius * 10) / 10;
};

const ctof = function(numCelsius) {
  numFarenheight = numCelsius * (9 / 5) + 32;
  return Math.round(numFarenheight * 10) / 10;
};

// remove a subsequent arguments from initial array argument if present //

const removeFromArray = function(array, ...toRemove) {
  for (item of toRemove) {
    if (array.includes(item)) {
      array.splice(array.indexOf(item), 1);
    }
  }
  return array;
};

// reverse a string //

const reverseString = function(string) {
  return string
    .split("")
    .reverse()
    .join("");
};
