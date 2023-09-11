// HTML Fragments
// const mhs = {
//     nama: 'Muhar Ferdiansyah',
//     umur: 18,
//     nrp: '0394080418',
//     email: 'ferdiansyahmuh@gmial.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. looping 
// const mhs = [
//     {
//         nama: 'Muhar',
//         email: 'muhar@gmail.com'
//     },
//     {
//         nama: 'Asep',
//         email: 'Asep@gmail.com'
//     },
//     {
//         nama: 'andi',
//         email: 'aNDI@gmail.com'
//     },

// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Kau Anjay',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`  : ''}</li>
//     </ul>
// </div>`;

// 4. nested
// HTML Fragment Bersarang
const mhs = {
    nama: 'Muhar Ferdiansyah',
    semester: 1,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;





document.body.innerHTML = el;