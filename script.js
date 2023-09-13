var currentDirection = "to bottom";
// JavaScript function to create the gradient of the two selected colors
function createGradient() {
    // Get the selected colors from the color pickers
    var color1 = document.getElementById("color-picker-1").value;
    var color2 = document.getElementById("color-picker-2").value;
  
    // Create the gradient of the two selected colors
    var gradient = "linear-gradient(" + currentDirection + "," + color1 + "," + color2 + ")";
  
    // Set the gradient as the background of the div with class "top"
    document.querySelector(".top").style.background = gradient;
  
    // Update the CSS code for the gradient
    document.getElementById("css-code").innerHTML =
      ".gradient-color { \n  background: " + gradient + ";\n}";
  }
  
function changeDirection(direction) {
  currentDirection = direction;
  createGradient();
}
