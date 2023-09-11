// function jumlahkan(...angka) {
// // let total = 0;
// // for (const a of angka) {
// //     total += a
// //  }
// //  return total;

// // return angka.reduce((a, b) => a + b);
// // }

// // console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['adi', 'anjay', 'asu', 'huda', 'andri']
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object Destructuring
// const team = {
//     pm: 'Muhar',
//     frontEnd1: 'erik',
//     frontEnd2: 'anjay',
//     backEnd: 'asu',
//     ux: 'adi',
//     devOps: 'rudy'
// }

// const{pm, ...myTeam} = team;
// console.log(myTeam);

// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type)
// }

// console.log(filterBy('boolean', 1, 2, 'Muhar', false, 10, true, 'Rudi'))