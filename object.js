// object literral
var mhs1 = {
    nama : 'Muhar Ferdiansyah',
    nrp : '00235678965',
    email : 'ferdiansyahmuh5@gmail.com',
    jurusan : 'Teknik Informatika'
}

// function declaration 
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs2 = buatObjectMahasiswa('anjay', '004573689', 'anjay@gmail.com', 'Teknik Perkebunan')

// constructor 
function Mahasiswa (nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa('jambay', '09483850', 'jambay@gmail.com', 'Teknik Layang');