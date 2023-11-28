"use strict"

function getWeeklyDay( year, month, day){
    let data_aktualna = new Date( year, month - 1, day)
    let jezyk = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
    let dnipohiszpansku = new Intl.DateTimeFormat("es-ES",{weekday:"long"}).format(data_aktualna);
    return dnipohiszpansku;
}

let year = 2023;
let month = 11;
let day = 28;
let wynik = getWeeklyDay( year, month, day)
console.log (wynik)