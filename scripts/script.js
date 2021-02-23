function calculateBMI() {
    const name = document.getElementById('username').value;
    const h=document.getElementById('height').value;
    const w=document.getElementById('weight').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));

    document.getElementById("result").innerHTML=`${name}, Your BMI is ${bmio}`;
}