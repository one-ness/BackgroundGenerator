var color1 = document.querySelector('input[name="color1"]');
var color2 = document.querySelector('input[name="color2"]');
var button = document.querySelector('.button');
var body = document.querySelector('body');
var css = document.querySelector('h3');

color1.oninput = gradient;
color2.oninput = gradient;
button.onclick = randomGradient;
window.onload = initialGradient;

function hexToRGBString(hex) {
    if(hex.length === 6) {
        var rgb = 'rgb(';
        var rgbValue;
        for(var i = 0; i < hex.length; i+=2) {
            rgbValue = parseInt(hex[i], 16) * 16 + parseInt(hex[i + 1], 16);
            rgb += rgbValue + ", ";
        }
        return rgb.substring(0, rgb.length - 2) + ")";
    }
    return 'Invalid input, hex must contain 2 hex-values for each r, g, and b (i.e. ffa9c8).'
}

function initialGradient() {
    css.textContent = 'linear-gradient(to right, ' + 
                      hexToRGBString(color1.value.substring(1)) + ', ' + 
                      hexToRGBString(color2.value.substring(1)) + ')';
}

function gradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    css.textContent = body.style.background;
}

function randomRGB() {
    var hexValues = '0123456789abcdef';
    var hex = '';
    for(var i = 0; i < 6; i++) {
        hex += hexValues[Math.floor((Math.random() * 16))];
    }
    return [hexToRGBString(hex), '#' + hex];
}

function randomGradient() {
    var rand1 = randomRGB();
    var rand2 = randomRGB();
    color1.value = rand1[1];
    color2.value = rand2[1];
    body.style.background = 'linear-gradient(to right, ' + rand1[0] + ', ' + rand2[0] + ')';
    css.textContent = body.style.background;
}