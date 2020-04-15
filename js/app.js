"use strict";
let current = null;
let select = null;
function selectChose(e) {
    current = e;
    select = e.parentNode;
    select.classList.toggle('active');
}

function selectItem(e) {
    if(!current)
        select.classList.remove('active');

    current.textContent = e.textContent;
    current.setAttribute('data-key', e.getAttribute('data-key'));
    current.setAttribute('data-value', e.getAttribute('data-value'));
    select.classList.remove('active');
}