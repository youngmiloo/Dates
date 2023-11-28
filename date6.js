function getSecondsFromNewYear(){
    let now = new Date();
    let niewiem = now.getFullYear();
    let nastepnyrok = niewiem +1;
    let poczatekroku = new Date(nastepnyrok, 0,1);
    let sekundy = ((poczatekroku-now)/1000);
    return sekundy;
}


let rezultat = getSecondsFromNewYear();
console.log (rezultat)