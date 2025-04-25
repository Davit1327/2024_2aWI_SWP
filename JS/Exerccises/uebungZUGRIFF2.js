


function calculateSum() {
    console.log("Calculete Clicked");

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;

    console.log("inputA: " + inputA);
    console.log("inputB: " + inputB);

    let result = Number(inputA) + Number(inputB);

    console.log(typeof inputA);
    console.log(typeof inputA);

    console.log(result);

    let resultElement = document.getElementById("result")
    resultElement.innerHTML = result;
}

