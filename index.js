// !!! after changing this file, DON'T FORGET TO RUN THE ROLLUP SCRIPT IN THE TERMINAL: $ npm run rollup

import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/switch/switch.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/elevated-button.js';
import '@material/web/menu/menu.js';
// import '@material/web/popover/popover.js';

let loginForm = document.getElementById('submit-form');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subscribed = document.querySelector('#subscribe-checkbox').checked;
    let selectHealthOptions = document.getElementById('select-health-options').value;
    let allergySwitch = document.getElementById('allergy-switch').selected;

    console.log('name: = ', name);
    console.log('email: = ', email);
    console.log('subscribed: = ', subscribed);
    console.log('selectHealthOptions: = ', selectHealthOptions);
    console.log('allergySwitch: = ', allergySwitch);
});

const anchorEl = document.body.querySelector('#usage-popover-anchor');
const menuEl = document.body.querySelector('#usage-popover');

anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("index.js - SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!" + error);
    });
}

// after changing this file, DON'T FORGET TO RUN THE ROLLUP SCRIPT IN THE TERMINAL: $ npm run rollup
