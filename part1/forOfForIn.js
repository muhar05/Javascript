// for..of
// const mhs = [ 'Muhar', 'Aji', 'Iqbal'];


// array
// for( let i = 0; i < mhs.length; i++) {
//      console.log(mhs[i])
// }

// mhs.forEach(m => console.log(m));

// for( const m of mhs) {
//     console.log(m);
// }

// string
// const nama = 'Muhar';
// for( const n of nama) {
//     console.log(n);
// }


// const mhs = [ 'Muhar', 'Aji', 'Iqbal'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah Mahasiswa ke-${i + 1}`)
// });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah Mahasiswa ke-${i + 1}`)
// };

// NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments

// function jumlahkanAngka() {
//     // return argumets.reduce((a, i) => a + i);
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// for ... in
// const mhs = {
//     nama: 'Muhar',
//     umur: 18,
//     email: 'muhar@email.com'
// }


// for (m in mhs) {
//     console.log(mhs[m]);
// }