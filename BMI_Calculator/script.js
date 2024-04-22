
function calculateBmi() {
    let weight = parseFloat(document.getElementById("Weight").value);
    let height = parseFloat(document.getElementById("Height").value);
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height values.");
      return;
    }
  
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  
    document.getElementById("heading").innerHTML = "Your BMI is :"
    document.getElementById("bmi-op").innerHTML = bmi
  
    if (bmi < 18.5) {
      document.getElementById("msg").innerHTML = `You are Underweight`;
    } else if (bmi >= 18.5 && bmi < 25) {
      document.getElementById("msg").innerHTML = `You are Normal weight`;
    } else if (bmi >= 25 && bmi < 30) {
      document.getElementById("msg").innerHTML = `You are Overweight`;
    } else {
      document.getElementById("msg").innerHTML = `You are Obese`;
    }
  }
  
  function reload() {
 window.location.reload()
  }
  