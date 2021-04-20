export const csvExport = (csvName, rows, header = []) => {
  let csvContent =
    "data:text/csv;charset=utf-8," +
    header.join(",") +
    "\n" +
    rows.map(e => e.join(",")).join("\n");

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");

  link.setAttribute("href", encodedUri);
  link.setAttribute("download", csvName);
  document.body.appendChild(link); // Required for FF

  link.click();
};
