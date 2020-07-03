var color1 = document.querySelector('input[name="color1"]');
var color2 = document.querySelector('input[name="color2"]');
var body = document.querySelector('body');
var css = document.querySelector('h3');

color1.oninput = gradient;
color2.oninput = gradient;
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