let personname : string = '';
personname = prompt('what is your name?') || '';

let lowercase :string = personname.toLowerCase();
let upercase :string = personname.toUpperCase();
let titlecase :string = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join(' ')

if(personname !== null && personname !== ''){
    alert(`hellow ${personname}, here are your name in:
    lowercase: ${lowercase}
    upercase: ${upercase}
    titlecase: ${titlecase}`)
}