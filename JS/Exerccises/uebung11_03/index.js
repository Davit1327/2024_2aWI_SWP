function ClosestZero(temperature) {

    let Closest = temperature[0];
    for (let i = 1; i < temperature.length; i++) {
        let temperat = temperature[i];
        let nearTemperat = temperat < 0 ? -temperat : temperat;         // wenn temperat größer als 0 gib -temperat wenn nicht temperat also boolean//
        let nearClose = Closest < 0 ? -Closest : Closest;

        if (nearTemperat < nearClose) {
            Closest = temperat;
        }
    }
    return Closest;
}

const temperats = [5, 1, -2, -8, 4, -5];
console.log(ClosestZero(temperats));

