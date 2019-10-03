document.getElementById('revText').value=''
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
    let column = rowData[row].split(/\s\s+/g)
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
      td.appendChild(document.createTextNode(columnArray[rowNum][cell]))
      tr.appendChild(td)
    }
    table.appendChild(tr)
   table.appendChild(tr)
    }
  }
  console.log(table)
  document.getElementById('tableOutput').appendChild(table)
}

function parseRev (revVal) {
    let revSpace = revVal;
    const pattern = /([1-9])(\d{3,4})([a-z])(\d{1,3})/gim;
    const patternOne = /([1-9])(\d{3,4})([a-z])(\d{1,3})/
    let spaceList = revSpace.split(/\n/g)
    createTable(spaceList)
    }

