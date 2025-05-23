let IN = "ATGCTTCAGAAAAGGTCAGCG";

let A = 0;
let C = 0;
let G = 0;
let T = 0;

if (IN.length > 0 && IN.length < 1000) {
    for (let i = 0; i <= IN.length; i++) {
        if (IN[i] == "A") {
            A += 1;
        } else if (IN[i] == "C") {
            C += 1;
        } else if (IN[i] == "G") {
            G += 1;
        } else if (IN[i] == "T") {
            T += 1;
        }
    } console.log(A, C, G, T);
}