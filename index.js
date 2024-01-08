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
// added these
import '@material/web/menu/menu.js';
// import '@material/web/popover/popover.js';



// code in this file can be added to the bundle.js file after the command 
// rollup, to add this functionality. This is merely a placeholder file, because 
// this code gets deleted from the bundle.js file after the command rollup.

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
// after adding an import DON'T FORGET TO RUN THE ROLLUP SCRIPT