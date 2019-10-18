var table = document.getElementById('tableOutput')
const downloadCSV = document.getElementById('downloadCSVBtn').addEventListener('click', download_csv);
document.getElementById('revField').value = ''
const makeTableBtn = document.getElementById('makeTableBtn').addEventListener('click', function () {
    const revField = document.getElementById('revField');
    const tableField = document.getElementById('tableField');

    parseRev(revField.value);
    const lineCheck = document.getElementById('lineCheck').checked;
    if (lineCheck == false) {
        table.style.border = '1px solid black';
        document.getElementById('lineHeader').style.display = 'none'
        for (var i = 0, row; row = table.rows[i]; i++) {
            // console.log(row)
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (var j = 0, col; col = row.cells[j]; j++) {

                if( j == 0) {
                    col.style.display = 'none'
                }
              //iterate through columns
              //columns would be accessed using the "col" variable assigned in the for loop
            }  
         }
    }
    if (lineCheck == true) {
        table.style.border = '1px solid black';
        document.getElementById('lineHeader').style.display = 'block'
        for (var i = 0, row; row = table.rows[i]; i++) {
            // console.log(row)
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (var j = 0, col; col = row.cells[j]; j++) {

                if( j == 0) {
                    col.style.display = 'block'
                }
              //iterate through columns
              //columns would be accessed using the "col" variable assigned in the for loop
            }  
         }
    }
});

var csvArray = []
function download_csv() {
  var csv = 'Line,McMaster-Carr Part #, Description, Price\n';
  let csvContent = "data:text/csv;charset=utf-8," ;
  // csvArray.forEach(function(row) {
  //         csv += row.join(',');
  //         csv += "\n";
  // });

  csvArray.forEach(function(rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
});
var encodedUri = encodeURI(csvContent);
window.open(encodedUri);

  console.log(csvContent);
  // var hiddenElement = document.createElement('a');
  // hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  // hiddenElement.target = '_blank';
  // hiddenElement.download = 'table.csv';
  // hiddenElement.click();
  //   + csv.map(e => e.join(",")).join("\n");
  // window.open('data:text/csv;charset=utf-8,' + encodeURI(csvContent));

//   var encodedUri = encodeURI(csv);
// var link = document.createElement("a");
// link.setAttribute("href", encodedUri);
// link.setAttribute("download", "table.csv");
// document.body.appendChild(link); // Required for FF

// link.click();
}

function createTable(rowData) {
  let columnArray = []
  for (let row in rowData) {

    console.log(rowData[row])
    //TODO: long part number overflows, causes only 1 space after part
    let columnTest = rowData[row].split(' ')
    columnTest[1] = String(columnTest[1]) + '   '
    let columnWithSpaces = columnTest.join(' ')
    console.log(columnTest)

    // let column = rowData[row].split(/\s\s+/g)
    let column = columnWithSpaces.split(/\s\s+/g)
    // console.log(column)
    column.unshift(column[0][0])
    column[1] = String(column[1].match(/([1-9])(\d{3,4})([a-z])(\d{1,3})/gim))
    columnArray.push(column)
  }
//   console.log(columnArray)
  for (let rowNum in columnArray) {
    var csvRow =[]
    var tr = document.createElement('tr')
    // console.log('row')
    for (let cell in columnArray[rowNum]) {
      if (cell == 0 || cell == 1 || cell == 2 || cell == 5) {
        console.log(String(columnArray[rowNum][2]).toLowerCase())
        columnArray[rowNum][2] = String(columnArray[rowNum][2]).toLowerCase()
        columnArray[rowNum][2] = columnArray[rowNum][2].split(' ')
        for (var i = 0; i<columnArray[rowNum][2].length; i++) {
            columnArray[rowNum][2][i] = columnArray[rowNum][2][i].charAt(0).toUpperCase() + columnArray[rowNum][2][i].slice(1);
        }
        columnArray[rowNum][2] = columnArray[rowNum][2].join(' ')
        var td= document.createElement('td')
        if (cell == 5) {
          let priceSplit = String(columnArray[rowNum][cell]).split(/\s+/g)
          console.log(priceSplit)
          if (priceSplit[1] == 'EA') {
            priceSplit[1] = 'each'
          }
          else if (priceSplit[1] == 'PK') {
            priceSplit[1] = 'per pack of '
          }
          columnArray[rowNum][cell] = priceSplit.join(' ')
            columnArray[rowNum][cell] = '$' + columnArray[rowNum][cell]
                td.appendChild(document.createTextNode(columnArray[rowNum][cell]))
        }
        else {
      td.appendChild(document.createTextNode(columnArray[rowNum][cell]))
        }
      tr.appendChild(td)
    }
    table.appendChild(tr)
   table.appendChild(tr)
   let  noComma = String(columnArray[rowNum][cell]).replace(/,/gim, '')
   console.log(noComma)
   csvRow.push(noComma)
    }
    csvArray.push(csvRow)

  }

  console.log(table)
  // document.getElementById('tableOutput').appendChild(table)
}

function parseRev (revVal) {
    let revSpace = revVal;
    const pattern = /([1-9])(\d{3,4})([a-z])(\d{1,3})/gim;
    const patternOne = /([1-9])(\d{3,4})([a-z])(\d{1,3})/
    let spaceList = revSpace.split(/\n/g)
    for (let i in spaceList) {
      spaceList[i] = spaceList[i].trim();
    }
    createTable(spaceList)
    }
