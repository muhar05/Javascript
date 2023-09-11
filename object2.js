// membuat object javascript
// objek literal
// problem : Tidak efektif untuk banyak objek
// let mahasiswa = {
//     nama : 'Muhar',
//     energi : 10,
//     makan : function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}`, `selamat makan!`);
//     }
// }

// function declaration
// const methodMahasiswa = {
//     makan : function (porsi) {
//         this.energi += porsi
//         console.log(`haloo ${nama}, Selamat Makan`);
//     },

//     main : function (jam) {
//         this.energi -= jam
//         console.log(`haloo ${this.nama}, Selamat Bermain`);
//     },

//     tidur : function (jam) {
//         this.energi += jam * 2;
//         console.log(`haloo ${this.nama}, selamat tidurr!`);
//     }
// }

// function Mahasiswa (nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// } 
 
// let Rayhan = Mahasiswa('Rayhan', 30);



// prototype + constructor
// function Mahasiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// } 

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let muhar = new Mahasiswa('Muhar', 10)

// versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

        makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

        main(jam) {
            this.energi -= jam;
            return `Halo ${this.nama}, selamat bermain!`;
        }
        
        tidur(jam) {
            this.energi += jam * 2;
            return `Halo ${this.nama}, selamat tidur!`;
        }

}

let rexadan = new Mahasiswa('Rexadan', 10);








// constructor Function
// keyword new
// function Mahasiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`haloo ${nama}`, `Selamat Makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam
//         console.log(`haloo ${this.nama}`, `Selamat Bermain`);
//     }

// } 

// let muhar = new Mahasiswa('Muhar', 10);