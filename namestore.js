"use strict";
let personname = '';
personname = prompt('what is your name?') || '';
let lowercase = personname.toLowerCase();
let upercase = personname.toUpperCase();
let titlecase = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join(' ');
if (personname !== null && personname !== '') {
    alert(`hellow ${personname}, here are your name in:
    lowercase: ${lowercase}
    upercase: ${upercase}
    titlecase: ${titlecase}`);
}
