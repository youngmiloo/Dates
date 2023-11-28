"use strict"

function getWeeklyDay( year, month, day){
    let data_aktualna = new Date( year, month - 1, day)
    let jezyk = ["poniedzialek", "wtorek", "sroda", "czwartek", "piatek", "sobota", "niedziela"];
    let dni = new Intl.DateTimeFormat("pl-PL",{weekday:"long"}).format(data_aktualna);
    return dni;
}

let year = 2007;
let month = 4;
let day = 27;
let wynik = getWeeklyDay( year, month, day)
console.log (wynik)