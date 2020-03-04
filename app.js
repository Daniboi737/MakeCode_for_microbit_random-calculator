let produkt = 0;
let svar = 0;
let tiere = 0;
let faktor1 = 0;
let faktor2 = 0;
let enere = 0;

input.onGesture(Gesture.Shake, function () {
    produkt = 0;
    svar = 0;
    tiere = 0;
    faktor1 = 0;
    faktor2 = 0;
    enere = 0;
    faktor1 = Math.randomRange(0, 5);
    faktor2 = Math.randomRange(0, 10);
    basic.showString("" + faktor1 + "X" + faktor2 + "=");
    basic.showString("" + faktor1 * faktor2);
})
