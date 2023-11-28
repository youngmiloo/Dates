function getLastDayOfMonth(year, month){
    let pierwszydzien = new Date(year, month -1, 1)
    pierwszydzien.setMonth(pierwszydzien.getMonth()-1)
    let ostatnidzien = new Date(pierwszydzien.getFullYear(),pierwszydzien.getMonth()+1,0)
    return ostatnidzien.getDate()
}

let terazniejszyrok = 2023
let terazniejszymiesiac = 11
let ostatnidzien = getLastDayOfMonth(terazniejszyrok, terazniejszymiesiac)
console.log (ostatnidzien)