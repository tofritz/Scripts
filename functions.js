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

// get random hex color //

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// col = hex color, amt =  base10 int percentage to (+) lighten or (-) darken //

function LightenDarkenColor(col, amt) {
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  var b = ((num >> 8) & 0x00ff) + amt;
  var g = (num & 0x0000ff) + amt;
  var newColor = g | (b << 8) | (r << 16);
  return newColor.toString(16);
}

// rgb string to hex

function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb
    .substr(4)
    .split(")")[0]
    .split(sep);

  for (let R in rgb) {
    let r = rgb[R];
    if (r.indexOf("%") > -1)
      rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
  }
  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

// RGB string to HSL

function RGBToHSL(rgb) {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  rgb = rgb
    .substr(4)
    .split(")")[0]
    .split(sep);

  for (let R in rgb) {
    let r = rgb[R];
    if (r.indexOf("%") > -1)
      rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
  }

  // Make r, g, and b fractions of 1
  let r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}
