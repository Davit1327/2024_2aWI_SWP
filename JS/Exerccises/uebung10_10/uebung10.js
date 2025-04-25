function countNucleotides(a) {
    let nucleotides = ["A", "C", "G", "T"];
    let counts = [0, 0, 0, 0];

    for (let char of a) {
        let i = nucleotides.indexOf(char);
        if (i !== -1) {
            counts[i]++;
        }
    }
}