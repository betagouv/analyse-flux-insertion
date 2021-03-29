// TYPEFLUX
const frequencyNames = {
  M: 'Mensuel',
  I: 'Quotidien',
  R: 'Reprise'
}

// NATFLUX
const typeNames = {
  D: 'Bénéficiaires',
  I: 'Instructions',
  R: 'Nouveau recueil'
}

function getFormattedTime() {
    var today = new Date();
    var y = today.getFullYear();
    // JavaScript months are 0-based.
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mi = today.getMinutes();
    var s = today.getSeconds();
    return y + "_" + m + "_" + d + "_" + h + "_" + mi + "_" + s;
}

export { frequencyNames, typeNames, getFormattedTime }
