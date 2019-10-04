document.getElementById('revField').value = ''
const makeTableBtn = document.getElementById('makeTableBtn').addEventListener('click', function () {
    const revField = document.getElementById('revField');
    const tableField = document.getElementById('tableField');
    parseRev(revField.value);
});

function createTable(rowData) {
  console.log('Table!')
  let columnArray = []
  for (let row in rowData) {

    console.log(rowData[row])
    //TODO: long part number overflows, causes only 1 space after part
    //let columnTest = rowData[row].match(/([1-9])(\d{3,4})([a-z])(\d{1,3})/im)
    // console.log(columnTest)
    let column = rowData[row].split(/\s\s+/g)
    //console.log(rowData[row])
    console.log(column)
    column.unshift(column[0][0])
    column[1] = String(column[1].match(/([1-9])(\d{3,4})([a-z])(\d{1,3})/gim))
    columnArray.push(column)
  }
  console.log(columnArray)
  //TODO: create table
  // var table = document.createElement('table')
  var table = document.getElementById('tableOutput')
  // var trH = document.createElement('tr')
  // var th = document.createElement('th')
  // trH.appendChild(document.createTextNode('Line'))
  // th.appendChild(document.createTextNode('McMaster-Carr Part #'))
  // th.appendChild(document.createTextNode('Description'))
  // th.appendChild(document.createTextNode('Price'))
  // th.appendChild(document.createTextNode('Line'))
  // trH.appendChild(th)
  // table.appendChild(trH)
  for (let rowNum in columnArray) {
    var tr = document.createElement('tr')
    console.log('row')
    for (let cell in columnArray[rowNum]) {
      if (cell == 0 || cell == 1 || cell == 2 || cell == 5) {
        var td= document.createElement('td')
        if (cell == 5) {
          let priceSplit = String(columnArray[rowNum][cell]).split(' ')
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
  document.getElementById('tableOutput').appendChild(table)
}

function parseRev (revVal) {
    let revSpace = revVal;
    const pattern = /([1-9])(\d{3,4})([a-z])(\d{1,3})/gim;
    const patternOne = /([1-9])(\d{3,4})([a-z])(\d{1,3})/
    let spaceList = revSpace.split(/\n/g)
    createTable(spaceList)
    }