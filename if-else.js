// let s = '';

// for( var i = 20; i > 0; i--) {
//     for(var c = 0; c < i; c++) {
//         s += '*';
//     }
//     s += '\n';
// }

// console.log(s)

function printSegitiga(jumlahBaris) {
    for (let i = 1; i <= jumlahBaris; i++) {
      let row = "";
      for (let j = 1; j <= jumlahBaris - i; j++) {
        row += " ";
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
      }
      console.log(row);
    }
  }
  
  // Panggil fungsi dengan jumlah baris yang diinginkan
  printSegitiga(10);
  
