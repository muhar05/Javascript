// Destructuring Variabel / Assignment

// Destructuring array

// const perkenalan = ['halo', 'nama', 'saya', 'muhar'];


// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items 
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// return value pada function
// function coba () {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5,];
// console.log(a);
// console.log(values);

// destructuring object 
// const mhs = {
//     nama: 'aye',
//     umur: 23
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({nama, umur} = { nama: 'aye',umur: 23});
// console.log(nama);

// asssign ke variabel baru
// const mhs = {
//         nama: 'aye',
//         umur: 23
//     }
    
//     const {nama: n, umur: u} = mhs;
//     console.log(u);

// memberikan Default Value 
// const mhs = {
//     nama: 'aye',
//     umur: 23,
//     email: 'aye@gmail.com'
// }

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'aye',
//     umur: 23,
//     email: 'aye@gmail.com'
// }

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);

// rest paramater 2
// const mhs = {
//     nama: 'aye',
//     umur: 23,
//     email: 'aye@gmail.com'
// }

// const {nama, ...value} = mhs;
// console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'aye',
//     umur: 23,
//     email: 'aye@gmail.com'
// }

// function getIdMhs(mhs) {
//     return mhs.id;
// }

// console.log(getIdMhs(mhs));


// Destructuring  return value

// return value berurutan(Array)
// function kalkulasi (a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// cara biasa
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kurang = penjumlahanPerkalian(2, 3)[1];\

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(tambah);

// return value object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }


// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang)

// Desctruction function arguments 
// non destructuring
const data1 = {
    nama: 'asu',
    umur: 33,
    hobi: 'basket',
    instagram: '@asu_25',
    nilai: {
        tugas: 80,
        uts: 70,
        uas: 100
    }
}

// function cetakData (data1) {
//     return `halo nama saya ${data1.nama}, saya berumur ${data1.umur} tahun.`;
// }

// console.log(cetakData(data1));

// destructuring
function cetakData ({nama, umur, nilai: {tugas, uts, uas}}) {
    return `halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakData(data1));