Скрипт для запису даних з форми у гугл таблицю

const sheetUrl = "https://docs.google.com/spreadsheets/d/1GFLUM6dFG_cIY6amSCJq4YM6mUR8gDlrcmQX-nAbt2I/edit#gid=0";
const sheetName = "Page1";
const sheets = SpreadsheetApp.openByUrl(sheetUrl);

function doPost(e) {
const data = e.parameter;
const timestamp = new Date().toLocaleString();
let sheet = sheets.getSheetByName(data.sheetName || sheetName);
if (!sheet) {
sheet = sheets.insertSheet(data.sheetName || sheetName);
sheet.appendRow(['name','role', 'email', 'message', 'pathname', 'timestamp']); // add header row to the new sheet
}
sheet.appendRow([data.name || 'incognito-name', data.role, data.email, data.message, data.pathname, timestamp]);
return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
}
