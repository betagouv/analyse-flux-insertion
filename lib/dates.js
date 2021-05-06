const stringToDate = dateStr => {
  const [day, month, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
};

const applicationStringToDate = dateStr => {
  const [year, month, day] = dateStr.split("-");
  return new Date(year, month - 1, day);
};

const applicationDateToString = date => {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  return y + "-" + (m < 10 ? `0${m}` : m) + "-" + (d < 10 ? `0${d}` : d);
};

const dateYesterday = date => {
  date.setDate(date.getDate() - 1);
  return date;
};

const yesterdayApplicationDate = dateStr => {
  return applicationDateToString(dateYesterday(applicationStringToDate(dateStr)));
};

function getDateTimeString(date = new Date()) {
  let y = date.getFullYear();
  // JavaScript months are 0-based.
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let mi = date.getMinutes();
  let s = date.getSeconds();
  return (
    y +
    "_" +
    (m < 10 ? `0${m}` : m) +
    "_" +
    (d < 10 ? `0${d}` : d) +
    "_" +
    (h < 10 ? `0${h}` : h) +
    "_" +
    (mi < 10 ? `0${mi}` : mi) +
    "_" +
    (s < 10 ? `0${s}` : s)
  );
}

function getFrenchFormatDateString(date) {
  let y = date.getFullYear();
  // JavaScript months are 0-based.
  let m = date.getMonth() + 1;
  let d = date.getDate();
  return d + "/" + m + "/" + y;
}

export {
  getFrenchFormatDateString,
  stringToDate,
  getDateTimeString,
  yesterdayApplicationDate,
  applicationStringToDate,
};
