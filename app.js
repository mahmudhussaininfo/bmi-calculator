const namee = document.getElementById("namee");
const weight = document.getElementById("weight");
const height = document.getElementById("hight");
const submit = document.getElementById("submit");
const score = document.getElementById("score");
const formBmi = document.getElementById("bmiForm");
const inch = document.getElementById("inch");
const inchCmButton = document.getElementById("inchCm");
const centimeter = document.getElementById("centimeter");

inchCmButton.addEventListener("click", () => {
  let inchValue = inch.value * 2.54;
  centimeter.textContent = "Your Height is :" + " " + inchValue;
});

submit.addEventListener("click", () => {
  let nameValue = namee.value;
  let weightValue = parseFloat(weight.value);
  let heightValue = parseFloat(height.value);

  heightValue = heightValue / 100;
  let square = heightValue * heightValue;
  let bmi = weightValue / square;
  score.textContent = `Hi ${nameValue}, Your BMI is: ${bmi.toFixed(2)}`;

  if (bmi < 18.5) {
    score.style.color = "white";
    score.style.backgroundColor = "orange";
    score.textContent = `Hi ${nameValue}, Your BMI is : ${bmi.toFixed(
      2
    )} you're now in Underweight situation! please eat some food!`;
  } else if (bmi == 18.5 || bmi <= 24.9) {
    score.style.color = "white";
    score.style.backgroundColor = "green";
    score.textContent = `Hi ${nameValue}, Your BMI is : ${bmi.toFixed(
      2
    )} you're in Normal weight situation! Keep it up!`;
  } else if (bmi == 25 || bmi <= 29.9) {
    score.style.color = "white";
    score.style.backgroundColor = "#d59304";
    score.textContent = `Hi ${nameValue}, Your BMI is : ${bmi.toFixed(
      2
    )} you're in Overweight situation! please try to lose some weight!`;
  } else if (bmi >= 30) {
    score.style.color = "white";
    score.style.backgroundColor = "red";
    score.textContent = `Hi ${nameValue}, Your BMI is : ${bmi.toFixed(
      2
    )} you're in Obese situation! please consult with a doctor! Otherwise you're going to die😥`;
  }
});

formBmi.addEventListener("submit", (e) => {
  e.preventDefault();
});
