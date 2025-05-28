let binary = "10101100";
let result = inverted(binary);

console.log(result)

function inverted(Binar) {
    let inverted = "";


    for (let i = 0; i <= Binar.length; i++) {
        if (Binar[i] == '0') {
            inverted += '1';
        }
        else if (Binar[i] == '1') {
            inverted += '0';
        }


    }
    return inverted;
}