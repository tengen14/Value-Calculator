let result = document.querySelector("#result");
let inputValues = document.getElementsByClassName("input-value");

for (var i = 0; i < inputValues.length; i++) {
  inputValues[i].addEventListener("change", function() {
    let employees = parseInt(inputValues[0].value);
    let costPerHour = parseInt(inputValues[1].value);
    let hoursSaved = parseInt(inputValues[2].value);

    let newResult = employees * (4 * costPerHour) * hoursSaved;
    newResult = newResult.toString();
    
    result.innerHTML=newResult;
  });
}
