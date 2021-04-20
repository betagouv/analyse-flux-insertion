const stringToDate = dateStr => {
  const [day, month, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
};

function getDateTimeString(date = new Date()) {
  let y = date.getFullYear();
  // JavaScript months are 0-based.
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let mi = date.getMinutes();
  let s = date.getSeconds();
  return y + "_" + m + "_" + d + "_" + h + "_" + mi + "_" + s;
}

function getFrenchFormatDateString(date) {
  let y = date.getFullYear();
  // JavaScript months are 0-based.
  let m = date.getMonth() + 1;
  let d = date.getDate();
  return d + "/" + m + "/" + y;
}

export { getFrenchFormatDateString, stringToDate, getDateTimeString };
