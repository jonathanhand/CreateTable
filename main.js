var table = document.getElementById('tableOutput')

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

function createTable(rowData) {
  console.log('Table!')
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
                td.appendChild(document.createTextNode('$' + columnArray[rowNum][cell]))
        }
        else {
      td.appendChild(document.createTextNode(columnArray[rowNum][cell]))
        }
      tr.appendChild(td)
    }
    table.appendChild(tr)
   table.appendChild(tr)
    }
  }
  console.log(table)
  console.log(document.getElementById('wholeTable'))
  // document.getElementById('tableOutput').appendChild(table)
}

function parseRev (revVal) {
    let revSpace = revVal;
    const pattern = /([1-9])(\d{3,4})([a-z])(\d{1,3})/gim;
    const patternOne = /([1-9])(\d{3,4})([a-z])(\d{1,3})/
    let spaceList = revSpace.split(/\n/g)
    createTable(spaceList)
    }
