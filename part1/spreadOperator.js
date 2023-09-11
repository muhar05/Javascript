// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['Muhar', 'aji', 'Iqbal'];
// console.log(...mhs[0])

// Menggabungkan 2 array
// const mhs = ['Muhar', 'aji', 'Iqbal'];
// const dosen = ['ade', 'anjay', 'iso'];
// const orang = [...mhs, 'olaa', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// meng=copy array
// const mhs = ['Muhar', 'aji', 'Iqbal'];
// // const mhs1 = mhs; not this
// // this
// const mhs1 = [...mhs];
// mhs1[0] = 'harry'
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;

