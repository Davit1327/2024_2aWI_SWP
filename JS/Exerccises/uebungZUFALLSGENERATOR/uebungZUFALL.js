function generate() {
    let num1 = document.getElementById("inA").value;
    let num2 = document.getElementById("inB").value;

    let diff = parseInt(num2) - parseInt(num1);

    let randomNum = Math.floor(Math.random() * diff) + parseInt(num1) + 1;
    console.log(randomNum);

    document.getElementById("randomNum").innerHTML = randomNum;

}