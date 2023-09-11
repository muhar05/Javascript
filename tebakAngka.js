let ulangi = true;
let Kesempatan = true;
while ( ulangi ) {
    let player = prompt('Tebak Angka dari 1-10' + '\nAnda punya 3 Kesempatan');
    let comp = Math.random();
    
    if ( comp <= 0.10) {
        comp = 1
    } else if ( comp <= 0.20) {
        comp = 2
    } else if ( comp <= 0.30) {
        comp = 3
    } else if ( comp <= 0.40) {
        comp = 4
    } else if ( comp <= 0.50) {
        comp = 5
    } else if ( comp <= 0.60) {
        comp = 6
    } else if ( comp <= 0.70) {
        comp = 7
    } else if ( comp <= 0.80) {
        comp = 8
    } else if ( comp <= 0.90) {
        comp = 9
    } else  {
        comp = 10
    }
    
        let hasil;
        
        if ( player == comp ) {
            hasil = 'Ya anda Benar';
        } else if ( player <= comp) {
            hasil = 'terlalu rendah';
        } else if ( player >= comp) {
            hasil = 'terlalu tinggi';
        }
        
        
        alert('kamu memilih angka : ' + player + ' ' + hasil);

    ulangi = confirm('lagi mas?');
}

alert('byeee');