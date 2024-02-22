"use strict";
let personname = '';
personname = prompt('what is your name?') || '';
if (personname !== null && personname !== '') {
    alert(`hallow ${personname}, would you like to learn somwe pythobne?`);
}
else {
    alert(`you have to fill your name!`);
}
