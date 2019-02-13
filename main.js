var timeSeconds = 234245645335;
var hours = Math.floor(timeSeconds /3600);

var ost = timeSeconds%3600;

var min = (ost%3600)/60;
var min_decimal = Math.floor(ost/60);
var s = Math.floor(ost%60);
//console.log(min + " " + s)
console.log(hours + ":" + min_decimal + ":" + s);

