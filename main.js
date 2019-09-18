const makeTableBtn = document.getElementById('makeTableBtn').addEventListener('click', function () {
    const revField = document.getElementById('revField');

    parseRev(revField.value);
});

function parseRev (revVal) {
    revVal = revVal.trim()
    revVal = revVal.replace(/ /g,'')
    rev = revVal.split(' ')
    console.log(rev)
    for(i in rev) {
        console.log(rev[i])
    }
}