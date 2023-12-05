// Prompt the user to choose the input metric
let inputMetric = prompt("In which metric is the temperature you are converting?\nC - Celsius\nF - Fahrenheit\nK - Kelvin");

// Prompt the user to enter the number to convert
let temperature = parseFloat(prompt("Enter the temperature you want to convert:"));

// Prompt the user to choose the output metric
let outputMetric = prompt("To which metric would you like to convert the temperature?\nC - Celsius\nF - Fahrenheit\nK - Kelvin");

// Function to convert temperature between metrics
function convertTemperature(temperature, inputMetric, outputMetric) {
  let convertedTemperature;

  if (inputMetric === outputMetric) {
    convertedTemperature = temperature; // No conversion needed if input and output metrics are the same
  } else if (inputMetric === "C" && outputMetric === "F") {
    convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit conversion
  } else if (inputMetric === "C" && outputMetric === "K") {
    convertedTemperature = temperature + 273.15; // Celsius to Kelvin conversion
  } else if (inputMetric === "F" && outputMetric === "C") {
    convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius conversion
  } else if (inputMetric === "F" && outputMetric === "K") {
    convertedTemperature = (temperature + 459.67) * 5/9; // Fahrenheit to Kelvin conversion
  } else if (inputMetric === "K" && outputMetric === "C") {
    convertedTemperature = temperature - 273.15; // Kelvin to Celsius conversion
  } else if (inputMetric === "K" && outputMetric === "F") {
    convertedTemperature = (temperature * 9/5) - 459.67; // Kelvin to Fahrenheit conversion
  } else {
    alert("Invalid input or output metric selected.");
    return; // Exit the function if an invalid metric is selected
  }

  alert(temperature + "°" + inputMetric + " is " + convertedTemperature.toFixed(2) + "°" + outputMetric);
}

// Call the function to convert the temperature
convertTemperature(temperature, inputMetric, outputMetric);