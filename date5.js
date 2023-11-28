function getSecondsFromNewYear(){
    let teraz = new Date()
    let niewiem = teraz.getFullYear();
    let poczatekroku = new Date(niewiem, 0,1)
    let sekundy = ((teraz-poczatekroku)/1000)
    return sekundy
}


let rezultat = getSecondsFromNewYear();
console.log (rezultat)