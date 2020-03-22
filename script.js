const result = document.querySelector("#result");
const inputValues = document.getElementsByClassName("input-value");

// equation data
// way to dry up this code?

for (var i = 0; i < inputValues.length; i++) {
  inputValues[i].addEventListener("change", function() {
    let employees = parseInt(inputValues[0].value);
    let costPerHour = parseInt(inputValues[1].value);
    let hoursSaved = parseInt(inputValues[2].value);
    
    let newResult = employees * (4 * costPerHour) * hoursSaved;
    console.log(newResult);
  });
}
