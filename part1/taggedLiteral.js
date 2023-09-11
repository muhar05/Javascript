// Tagged Literal
// const nama = 'Muhar'
// const umur = 18;

// function coba (strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Muhar'
const umur = 18;
const email = 'ferdi@email.com'

function highlight (strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''} </span>`, '')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun dan email saya ${email}.`;

document.body.innerHTML = str;