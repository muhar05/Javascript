// function init() {
//     let nama = 'Muhar';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

let add = (function () {
    let counter = 0;
    return function () {
        return ++ counter;
    }
}) ();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

