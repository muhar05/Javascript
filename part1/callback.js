// Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// // arrow fnction
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         "nama": "Muhar",
//         "nrp": "647562040",
//         "email": "muhar@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Randy",
//         "nrp": "34949379",
//         "email": "Randy@gmail.com",
//         "jurusan": "Teknik Industri",
//         "idDosenWali": 2
//     },
// ]
// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 1000000; i++) {
//         let date = new date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// Asychronus Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200){
//                 success(xhr.response);
//             } else if( xhr.status === 404) {
//                 error();
//             }
//         }
//     }


//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// } );
// console.log('selesai');

// use jQUERY failed
console.log('mulai');
$.ajax({
    url:'data/mahasiswa.json',
    succes: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    }, 
    error: (e) => {
        console.log(e.responseText);
    }
});

console.log('selesai');